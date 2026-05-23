import { useState } from "react"

function UrlInput() {

  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState("")
  
  const handleClick = () => {

    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      alert("Please enter a valid YouTube URL")
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }

  return (
    <div className="w-full max-w-2xl flex gap-3">

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste YouTube URL..."
        className="flex-1 p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none"
      />

      <button
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 px-6 rounded-xl font-semibold"
      >
        {loading ? "Processing..." : "Summarize"}
      </button>

    </div>
  )
}

export default UrlInput