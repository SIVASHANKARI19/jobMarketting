from typing import Dict, List, Set
from .skills import LEVELS_ORDER, find_present_skills, infer_skill_level_from_text, canonicalize_skill


def compute_level_variance(present_skills: Set[str], job_required: List[Dict[str, str]], resume_text: str) -> List[Dict[str, str]]:
    variances: List[Dict[str, str]] = []
    for req in job_required:
        req_skill = req["skill"]
        req_level = req["level"]
        canon = canonicalize_skill(req_skill)
        if canon in present_skills:
            resume_level = infer_skill_level_from_text(req_skill, resume_text)
            if resume_level != req_level:
                variances.append({
                    "skill": req_skill,
                    "resume_level": resume_level,
                    "required_level": req_level,
                })
    return variances


def compute_accuracy(num_required: int, num_matched: int, variances_count: int) -> int:
    if num_required == 0:
        return 0
    coverage = num_matched / num_required
    acc = int(round(coverage * 100 - variances_count * 3))
    return max(0, min(100, acc))


def evaluate_job_fit(resume_text: str, job: Dict, fuzzy_threshold: int) -> Dict:
    required_skills = [r["skill"] for r in job.get("required_skills", [])]
    present_canon, _ = find_present_skills(resume_text, required_skills, fuzzy_threshold)

    matching_skills: List[str] = []
    missing_skills: List[str] = []
    for req in job.get("required_skills", []):
        if canonicalize_skill(req["skill"]) in present_canon:
            matching_skills.append(req["skill"])
        else:
            missing_skills.append(req["skill"])

    variances = compute_level_variance(present_canon, job.get("required_skills", []), resume_text)
    accuracy = compute_accuracy(len(required_skills), len(matching_skills), len(variances))

    return {
        "job_id": job.get("job_id"),
        "job_title": job.get("job_title"),
        "matching_skills": matching_skills,
        "missing_skills": missing_skills,
        "level_variance": variances,
        "accuracy_rate": f"{accuracy}%",
    }
