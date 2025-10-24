from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# === Load and merge datasets ===
path = 'courses'
dfs = []
for file in os.listdir(path):
    if file.endswith('.csv'):
        df = pd.read_csv(os.path.join(path, file))
        dfs.append(df)

courses = pd.concat(dfs, ignore_index=True)

# clean + format
courses = courses[['partner','course','skills','rating','reviewcount','level','certificatetype','duration','crediteligibility']]
courses.dropna(subset=['skills'], inplace=True)
courses['skills'] = courses['skills'].astype(str).str.replace(r'[^a-zA-Z, ]','', regex=True).str.lower()

# === Create TF-IDF matrix ===
vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix = vectorizer.fit_transform(courses['skills'])

@app.route('/recommend', methods=['POST'])
def recommend():
    user_input = request.json.get('skills', '').lower()
    user_vec = vectorizer.transform([user_input])
    sim_scores = cosine_similarity(user_vec, tfidf_matrix).flatten()
    top_indices = sim_scores.argsort()[-5:][::-1]
    recs = courses.iloc[top_indices][[
        'partner','course','rating','reviewcount','level','certificatetype','duration','crediteligibility'
    ]].to_dict(orient='records')
    return jsonify(recs)

if __name__ == '__main__':
    app.run(debug=True)
