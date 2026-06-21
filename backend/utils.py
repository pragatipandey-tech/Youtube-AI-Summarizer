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

def generate_notes(transcript):

    prompt = f"""
    Convert this transcript into short study notes:

    {transcript}
    """

    response = model.generate_content(prompt)

    return response.text.split("\n")


def generate_quiz(transcript):

    prompt = f"""
    Create 5 quiz questions from this transcript:

    {transcript}
    """

    response = model.generate_content(prompt)

    return response.text.split("\n")