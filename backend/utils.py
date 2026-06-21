import google.generativeai as genai
from config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-1.5-flash")

def generate_summary(transcript):

    prompt = f"""
    Summarize this YouTube transcript clearly:

    {transcript}
    """

    response = model.generate_content(prompt)

    return response.text

def generate_notes(text):

    sentences = text.split(".")

    notes = []

    for sentence in sentences[:5]:

        cleaned = sentence.strip()

        if cleaned:
            notes.append(cleaned)

    return notes


def generate_quiz(text):

    return [
        "What is the main topic of the video?",
        "What important concept was explained?",
        "What did you learn from this video?"
    ]