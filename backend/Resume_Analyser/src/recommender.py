from typing import Dict, List
import yaml


def load_config(path: str = "config.yaml") -> Dict:
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def recommendations_for_skills(missing_skills: List[str], config: Dict) -> List[Dict[str, str]]:
    providers = (config or {}).get("recommendations", {}).get("providers", {})
    recos: List[Dict[str, str]] = []
    for skill in missing_skills:
        entry = providers.get(skill) or providers.get(skill.strip())
        if entry:
            recos.append({
                "skill": skill,
                "platform": entry.get("platform", ""),
                "course": entry.get("course", ""),
            })
        else:
            recos.append({
                "skill": skill,
                "platform": "Coursera",
                "course": f"{skill} Fundamentals",
            })
    return recos
