import json
from typing import Dict, Any, List
import click
from .pdf_utils import extract_text_from_pdf
from .matcher import evaluate_job_fit
from .recommender import load_config, recommendations_for_skills


@click.command()
@click.option("--input", "input_path", required=True, help="Path to input JSON")
@click.option("--output", "output_path", required=True, help="Path to output JSON")
@click.option("--config", "config_path", default="config.yaml", show_default=True, help="Path to config.yaml")
def main(input_path: str, output_path: str, config_path: str) -> None:
    with open(input_path, "r", encoding="utf-8") as f:
        payload: Dict[str, Any] = json.load(f)

    cfg = load_config(config_path)
    fuzzy = cfg.get("matching", {}).get("fuzzy_threshold", 85)

    resume_pdf = payload.get("input", {}).get("resume_pdf")
    if not resume_pdf:
        raise SystemExit("input.resume_pdf is required")

    resume_text = extract_text_from_pdf(resume_pdf)

    jobs: List[Dict[str, Any]] = payload.get("input", {}).get("jobs_applied", [])
    results: List[Dict[str, Any]] = []
    for job in jobs:
        fit = evaluate_job_fit(resume_text, job, fuzzy)
        # add recommendations for missing skills
        missing = fit.get("missing_skills", [])
        fit["recommended_learning"] = recommendations_for_skills(missing, cfg)
        results.append(fit)

    out = {
        "input": payload.get("input", {}),
        "output": results,
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2)


if __name__ == "__main__":
    main()
