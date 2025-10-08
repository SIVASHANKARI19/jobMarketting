import os
import json
import sys
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv('GEMINI_API_KEY')

# Basic fallback output (same shape as mockTrends in Node)
fallback = {
    'generated_by': 'fallback',
    'timestamp': None,
    'trends': [
        {'role': 'Frontend Developer', 'demand': 92, 'skills': ['React', 'TypeScript', 'CSS']},
        {'role': 'Data Scientist', 'demand': 84, 'skills': ['Python', 'Pandas', 'ML']},
        {'role': 'Backend Developer', 'demand': 78, 'skills': ['Node.js', 'Databases', 'APIs']},
    ]
}

if not API_KEY:
    fallback['timestamp'] = __import__('datetime').datetime.utcnow().isoformat()
    print(json.dumps(fallback))
    sys.exit(0)

try:
    import google.generativeai as aura
    from prompts import JOB_TREND_PROMPT
    aura.configure(api_key=API_KEY)
    model = aura.GenerativeModel('models/gemini-2.5-flash')

    # Ask the model for top job trends
    response = model.generate_content(JOB_TREND_PROMPT)
    text = response.text

    # Try to parse model output as JSON, otherwise return as plain text in a trend
    out = {
        'generated_by': 'gemini',
        'timestamp': __import__('datetime').datetime.utcnow().isoformat(),
        'raw': text,
        'trends': []
    }
    # Basic heuristic parsing: split lines and look for role names
    for line in text.split('\n'):
        line = line.strip()
        if not line: continue
        out['trends'].append({'role': line[:80], 'demand': 50, 'skills': []})

    print(json.dumps(out))
except Exception as e:
    fallback['timestamp'] = __import__('datetime').datetime.utcnow().isoformat()
    print(json.dumps(fallback))
