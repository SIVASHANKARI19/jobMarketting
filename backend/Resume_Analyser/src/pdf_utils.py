from io import StringIO
from pdfminer.high_level import extract_text_to_fp
from pdfminer.layout import LAParams


def extract_text_from_pdf(pdf_path: str) -> str:
    """Extract plain text from a PDF file.

    Args:
        pdf_path: Path to PDF.
    Returns:
        Extracted text.
    """
    buffer = StringIO()
    with open(pdf_path, "rb") as f:
        laparams = LAParams()
        extract_text_to_fp(f, buffer, laparams=laparams, output_type="text", codec=None)
    return buffer.getvalue()
