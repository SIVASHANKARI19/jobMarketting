# Resume_Analyser (Local PDF → JSON)

Local resume analyzer inspired by the reference repo. Provide a resume PDF and job requirements, get back matches, gaps, level variance, an accuracy heuristic, and course recommendations.

Reference: [tetratensor/ML-powered_resume_analyser](https://github.com/tetratensor/ML-powered_resume_analyser)

## Setup (Windows PowerShell)

```powershell
python -m venv .venv
. .venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Run (example)

```powershell
python -m src.cli --input example_input.json --output result.json
```

## Input schema

- input.resume_pdf: path to PDF
- input.jobs_applied[]: each with job_id, job_title, required_skills[] of {skill, level}

See `example_input.json`.

## Notes

- PDF text via pdfminer.six
- Skill detection uses keyword + fuzzy fallback (rapidfuzz)
- Accuracy is a simple heuristic (coverage minus variance penalty)
- Recommendations configurable in `config.yaml`
