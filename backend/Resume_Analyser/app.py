from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import json
from src.pdf_utils import extract_text_from_pdf
from src.matcher import evaluate_job_fit
from src.recommender import load_config, recommendations_for_skills

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def parse_jobs_json(text: str):
    try:
        data = json.loads(text)
        if isinstance(data, dict) and "jobs_applied" in data:
            return data["jobs_applied"]
        if isinstance(data, list):
            return data
    except Exception:
        return []
    return []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        file = request.files.get("resume_pdf")
        jobs_text = request.form.get("jobs_json", "").strip()
        jobs = parse_jobs_json(jobs_text)

        if not file or file.filename == "":
            return render_template("index.html", error="Please upload a PDF.")
        if not jobs:
            return render_template("index.html", error="Provide jobs JSON (array or {jobs_applied: [...]})")

        try:
            BASE_DIR = os.path.dirname(os.path.abspath(__file__))
            temp_path = os.path.join(BASE_DIR, "uploaded_resume.pdf")
            file.save(temp_path)
            resume_text = extract_text_from_pdf(temp_path)
        except Exception as e:
            return render_template("index.html", error=f"Failed to read PDF: {e}")

        cfg = load_config("config.yaml")
        fuzzy = cfg.get("matching", {}).get("fuzzy_threshold", 85)

        results = []
        for job in jobs:
            fit = evaluate_job_fit(resume_text, job, fuzzy)
            missing = fit.get("missing_skills", [])
            fit["recommended_learning"] = recommendations_for_skills(missing, cfg)
            results.append(fit)

        payload = {"input": {"jobs_applied": jobs}, "output": results}
        return render_template("index.html", result_json=json.dumps(payload, indent=2))

    return render_template("index.html")

@app.route("/api/analyse", methods=["POST"])
def api_analyse():
    if 'resume' not in request.files:
        return jsonify({'success': False, 'message': 'No resume file uploaded'}), 400
    
    file = request.files['resume']
    if file.filename == '':
        return jsonify({'success': False, 'message': 'No file selected'}), 400

    try:
        upload_path = os.path.join('uploads', file.filename)
        file.save(upload_path)
        
        # Process the resume (implement your analysis logic here)
        return jsonify({
            'success': True,
            'message': 'Resume uploaded and analysis started'
        })
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/resume-analysis/results', methods=['GET'])
def get_analysis_results():  # Changed function name to avoid conflicts
    try:
        result_path = os.path.join(os.path.dirname(__file__), 'result.json')
        with open(result_path, 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({
            "error": "No analysis results found",
            "input": {},
            "output": []
        }), 404
    except json.JSONDecodeError:
        return jsonify({
            "error": "Invalid JSON in result file",
            "input": {},
            "output": []
        }), 500

@app.route('/api/resume-analysis/upload', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({"success": False, "message": "No resume file"}), 400
    
    file = request.files['resume']
    if file.filename == '':
        return jsonify({"success": False, "message": "No file selected"}), 400

    try:
        upload_folder = os.path.join(os.getcwd(), 'uploads')
        os.makedirs(upload_folder, exist_ok=True)
        file.save(os.path.join(upload_folder, file.filename))
        return jsonify({"success": True, "message": "File uploaded successfully"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

# Alias routes
@app.route('/api/resume/analyze', methods=['POST'])
def resume_analyze_alias():
    return api_analyse()

@app.route('/api/resume/upload', methods=['POST'])
def upload_resume_alias():
    return upload_resume()

if __name__ == "__main__":
    os.makedirs('uploads', exist_ok=True)
    app.run(host="0.0.0.0", port=5000, debug=True)
