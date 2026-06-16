from fastapi import FastAPI
from services.transcriptService import fetch_transcript
from utils import (
    generate_summary,
    generate_notes,
    generate_quiz
)

app = FastAPI()


@app.get("/")
def home():

    return {
        "message": "AI YouTube Summarizer Backend Running"
    }


@app.get("/transcript")
def get_transcript(video_id: str):

    try:

        transcript_text = fetch_transcript(video_id)

        return {

            "video_id": video_id,

            "transcript": transcript_text,

            "summary": generate_summary(transcript_text),

            "notes": generate_notes(transcript_text),

            "quiz": generate_quiz(transcript_text),

            "characters": len(transcript_text),

            "words": len(transcript_text.split()),

            "preview": transcript_text[:300]

        }

    except Exception as e:

        return {
            "error": str(e)
        }