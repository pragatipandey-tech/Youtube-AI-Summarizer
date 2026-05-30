from fastapi import FastAPI
from youtube_transcript_api import YouTubeTranscriptApi

app = FastAPI()


@app.get("/")
def home():
    return {"message": "AI YouTube Summarizer Backend Running"}


@app.get("/transcript")
def get_transcript(video_id: str):

    transcript = YouTubeTranscriptApi.get_transcript(video_id)

    full_text = " ".join([t["text"] for t in transcript])

    return {
        "video_id": video_id,
        "transcript": full_text[:3000]
    }