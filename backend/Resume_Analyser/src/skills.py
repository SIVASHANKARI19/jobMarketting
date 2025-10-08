from typing import Dict, List, Set, Tuple
from rapidfuzz import fuzz

LEVELS_ORDER = ["Beginner", "Intermediate", "Advanced"]


def normalize_token(token: str) -> str:
    return token.strip().lower()


def normalize_text(text: str) -> str:
    # Lowercase and replace punctuation with spaces so 'react.js' -> 'react js'
    text = text.lower()
    cleaned = []
    for ch in text:
        if ch.isalnum() or ch.isspace():
            cleaned.append(ch)
        else:
            cleaned.append(" ")
    return " ".join("".join(cleaned).split())


def canonicalize_skill(skill: str) -> str:
    return normalize_token(skill)


def load_default_skill_aliases() -> Dict[str, Set[str]]:
    aliases: Dict[str, Set[str]] = {
        "excel": {"ms excel", "microsoft excel"},
        "power bi": {"powerbi", "power-bi"},
        "data visualization": {"dataviz", "data viz", "visualization"},
        "machine learning": {"ml"},
        "deep learning": {"dl"},
        "natural language processing": {"nlp"},
        "cloud computing": {"cloud"},
        "aws": {"amazon web services"},
        "kubernetes": {"k8s"},
        "docker": set(),
        "statistics": {"stats"},
        "node.js": {"nodejs", "node"},
        "react": {"reactjs", "react.js", "react,js"},
    }
    return aliases


def find_present_skills(resume_text: str, required_skills: List[str], fuzzy_threshold: int = 85) -> Tuple[Set[str], Dict[str, str]]:
    # Clean text so punctuation variants still match
    text = normalize_text(resume_text)
    aliases = load_default_skill_aliases()

    canonical_required = {canonicalize_skill(s): s for s in required_skills}
    canonical_set = set(canonical_required.keys())

    # Pre-tokenize for fuzzy fallback
    tokens = text.split()

    found: Set[str] = set()
    detected_form: Dict[str, str] = {}

    for canonical in canonical_set:
        forms = {canonical}
        forms |= aliases.get(canonical, set())

        # direct substring match on cleaned text (handles react vs react.js)
        if any(normalize_text(form) in text for form in forms):
            found.add(canonical)
            detected_form[canonical_required[canonical]] = canonical
            continue

        # fuzzy fallback across tokens
        matched = False
        for form in forms:
            form_clean = normalize_text(form)
            for tok in tokens:
                if fuzz.partial_ratio(form_clean, tok) >= fuzzy_threshold or fuzz.token_set_ratio(form_clean, tok) >= fuzzy_threshold:
                    found.add(canonical)
                    detected_form[canonical_required[canonical]] = tok
                    matched = True
                    break
            if matched:
                break

    return found, detected_form


def infer_skill_level_from_text(skill: str, resume_text: str) -> str:
    skill_norm = canonicalize_skill(skill)
    text = normalize_text(resume_text)

    signals = {
        "Beginner": {"familiar", "basic", "introductory", "novice"},
        "Intermediate": {"intermediate", "practical", "working knowledge", "hands-on"},
        "Advanced": {"advanced", "expert", "proficient", "senior", "architect"},
    }

    window = 64
    idx = text.find(skill_norm)
    snippet = text[max(0, idx - window): idx + len(skill_norm) + window] if idx != -1 else ""

    scores = {lvl: 0 for lvl in LEVELS_ORDER}
    for lvl, words in signals.items():
        for w in words:
            if w in snippet:
                scores[lvl] += 1

    if "years" in snippet or "year" in snippet:
        scores["Intermediate"] += 1
        if any(x in snippet for x in ["5+", "6 ", "7 "]):
            scores["Advanced"] += 1

    best = max(LEVELS_ORDER, key=lambda l: scores[l])
    return best
