import { useState } from "react"
import { fetchTranscript } from "../services/api"

function UrlInput() {

  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState("")

  const handleClick = async () => {

  if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
    alert("Please enter a valid YouTube URL")
    return
  }

  setLoading(true)

  try {

    const videoId = url.split("v=")[1]

    const data = await fetchTranscript(videoId)

    console.log(data)

  } catch (error) {

    console.log(error)

  }

  setLoading(false)
}

  return (

    <div className="w-full max-w-2xl">

      <div className="flex gap-3">

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube URL..."
          className="flex-1 p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
        />

        <button
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700 px-6 rounded-xl font-semibold"
        >
          {loading ? "Processing..." : "Summarize"}
        </button>

      </div>

      <p className="text-gray-500 text-sm mt-2">
        Characters: {url.length}
      </p>

    </div>
  )
}

export default UrlInput