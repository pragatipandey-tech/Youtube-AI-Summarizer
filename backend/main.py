from fastapi import FastAPI
from youtube_transcript_api import YouTubeTranscriptApi
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

        api = YouTubeTranscriptApi()

        transcript_list = api.fetch(video_id)

        transcript_text = " ".join(
            [item.text for item in transcript_list]
        )

        transcript_text = transcript_text.replace("\n", " ")

        transcript_text = transcript_text.replace("♪", "")

        transcript_text = transcript_text.strip()

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