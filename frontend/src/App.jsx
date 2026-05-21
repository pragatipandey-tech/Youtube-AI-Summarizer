import Navbar from "./components/Navbar"
import UrlInput from "./components/UrlInput"

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

        <h1 className="text-5xl font-bold mb-4 text-center">
          AI YouTube Summarizer
        </h1>

        <p className="text-gray-400 mb-8 text-center max-w-xl">
          Paste a YouTube link and get AI-generated summaries,
          notes, timestamps and quiz questions instantly.
        </p>

        <UrlInput />

      </div>
    </>
  )
}

export default App