const BASE_URL = "https://your-backend-name.onrender.com"

export async function fetchTranscript(videoId) {

  const response = await fetch(
    `${BASE_URL}/transcript?video_id=${videoId}`
  )

  const data = await response.json()

  return data
}