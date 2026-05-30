from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from youtube_transcript_api import YouTubeTranscriptApi

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI YouTube Summarizer Backend Running"}

@app.get("/transcript")
def get_transcript(video_id: str):

    api = YouTubeTranscriptApi()

    transcript = api.fetch(video_id)

    full_text = " ".join([t.text for t in transcript])

    return {
        "video_id": video_id,
        "transcript": full_text[:3000]
    }