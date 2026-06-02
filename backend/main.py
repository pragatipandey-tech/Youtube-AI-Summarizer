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

        transcript = " ".join(
            [item.text for item in transcript_list]
        )

        return {
         "video_id": video_id,
         "transcript": transcript,
         "summary": generate_summary(transcript),
         "notes": generate_notes(transcript),
         "quiz": generate_quiz(transcript),
         "characters": len(transcript),
         "words": len(transcript.split()),
         "preview": transcript[:300]
        }
    except Exception as e:

        return {
            "error": str(e)
        }