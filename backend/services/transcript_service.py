from youtube_transcript_api import YouTubeTranscriptApi

def fetch_transcript(video_id):

    try:

        api = YouTubeTranscriptApi()

        transcript_list = api.fetch(video_id)

        transcript_text = " ".join(
            [item.text for item in transcript_list]
        )

        transcript_text = transcript_text.replace("\n", " ")
        transcript_text = transcript_text.replace("♪", "")
        transcript_text = transcript_text.strip()

        return transcript_text

    except Exception as e:
      return str(e)