function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
      <h1 className="text-5xl font-bold mb-4 text-center">
        AI YouTube Summarizer
      </h1>

      <p className="text-gray-400 mb-8 text-center">
        Paste a YouTube link and get AI-generated summaries, notes, timestamps and quizzes.
      </p>

      <div className="w-full max-w-2xl flex gap-3">
        <input
          type="text"
          placeholder="Paste YouTube URL..."
          className="flex-1 p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none"
        />

        <button className="bg-red-600 hover:bg-red-700 px-6 rounded-xl font-semibold">
          Summarize
        </button>
      </div>

    </div>
  )
}

export default App