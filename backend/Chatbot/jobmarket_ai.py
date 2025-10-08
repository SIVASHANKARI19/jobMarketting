import os
from dotenv import load_dotenv
import google.generativeai as aura
from prompts import JOBMARKET_SYSTEM_PROMPT, ANALYZE_RESUME_PROMPT

# Load environment variables
load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("❌ GEMINI_API_KEY is not set. Please set it as an environment variable.")

# Configure Gemini
aura.configure(api_key=API_KEY)

# ✅ Use the short name shown in your model list
model = aura.GenerativeModel("models/gemini-2.5-flash")

# Example resume text
resume_text = """
John Doe
Experience: 2 years in Python development...
Skills: Python, Flask, React, MySQL...
"""

# Combine prompts and generate content
response = model.generate_content(
    JOBMARKET_SYSTEM_PROMPT + "\n\n" + ANALYZE_RESUME_PROMPT + "\n\n" + resume_text
)

print(response.text)
