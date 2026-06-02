from fastapi import FastAPI
from youtube_transcript_api import YouTubeTranscriptApi

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "AI YouTube Summarizer Backend Running"
    }


@app.get("/transcript")
def get_transcript(video_id: str):

    transcript_list = YouTubeTranscriptApi.get_transcript(video_id)

    transcript = " ".join(
        [item["text"] for item in transcript_list]
    )

    return {
        "video_id": video_id,
        "transcript": transcript,
        "characters": len(transcript),
        "words": len(transcript.split()),
        "preview": transcript[:300]
    }