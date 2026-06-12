import { useState } from "react"
import { fetchTranscript } from "../services/api"

function UrlInput({setTranscript,setSummary,setNotes,setQuiz,setStats,setLoading,setShowResults,setThumbnail,setError,loading}) {

  const [url, setUrl] = useState("")

  const handleClick = async () => {

    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      alert("Please enter a valid YouTube URL")
      return
    }

    setLoading(true)

    try {
      setError("")

      let videoId = ""

      if (url.includes("v=")) {
        videoId = url.split("v=")[1].split("&")[0]
      }

      else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]
      }

      setThumbnail(
       `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      )

      const start = Date.now()

      const data = await fetchTranscript(videoId)

      const end = Date.now()

      setProcessingTime(
        ((end - start) / 1000).toFixed(2)
      )

      setTranscript(data.transcript)

      setSummary(data.summary)

      setNotes(data.notes)

      setQuiz(data.quiz)

      setStats({
        words: data.words,
        characters: data.characters
     })

      setShowResults(true)

    } catch (error) {

      setError("Failed to fetch transcript.")

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
          disabled={loading}
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700 disabled:bg-zinc-700 px-6 rounded-xl font-semibold"
        >
          {loading ? "Fetching Transcript..." : "Summarize"}
        </button>

      </div>

      {loading && (

        <div className="mt-4 w-full bg-zinc-800 rounded-full h-2 overflow-hidden">

          <div className="bg-red-500 h-2 animate-pulse w-full"></div>

        </div>

      )}

      <p className="text-gray-500 text-sm mt-2">

        URL Length: {url.length}

        {url.length > 0 && " characters"}

      </p>

    </div>
  )
}

export default UrlInput