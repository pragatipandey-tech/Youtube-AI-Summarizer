const BASE_URL = "http://127.0.0.1:8000"

export async function fetchTranscript(videoId) {

  const response = await fetch(
    `${BASE_URL}/transcript?video_id=${videoId}`
  )

  const data = await response.json()

  return data
}