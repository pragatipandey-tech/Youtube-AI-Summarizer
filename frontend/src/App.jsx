import { motion } from "framer-motion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import UrlInput from "./components/UrlInput"
import SummaryCard from "./components/SummaryCard"
import NotesSection from "./components/NotesSection"
import TimestampList from "./components/TimestampList"
import QuizCard from "./components/QuizCard"
import Loader from "./components/Loader"
import StatsCard from "./components/StatsCard"

import { useState, useEffect } from "react"

function App() {

  const [showResults, setShowResults] = useState(false)

  const [loading, setLoading] = useState(false)

  const [transcript, setTranscript] = useState("")

  const [thumbnail, setThumbnail] = useState("")

  const [error, setError] = useState("")

  const [copied, setCopied] = useState(false)

  const [showFullTranscript, setShowFullTranscript] = useState(false)

  const [processingTime, setProcessingTime] = useState(0)

  const [showFullTranscript, setShowFullTranscript] = useState(false)

  const [summary, setSummary] = useState("")
  const [notes, setNotes] = useState([])
  const [quiz, setQuiz] = useState([])
  const [stats, setStats] = useState({})

  const handleReset = () => {

  setShowResults(false)

  setTranscript("")

  setSummary("")

  setNotes([])

  setQuiz([])

  setStats({})

  setProcessingTime(0)

  setThumbnail("")

  setError("")
  }

  const downloadTranscript = () => {

     const element = document.createElement("a")

     const file = new Blob([transcript], {
       type: "text/plain"
      })

      element.href = URL.createObjectURL(file)

      element.download = "transcript.txt"

      document.body.appendChild(element)

      element.click()
    }

  useEffect(() => {

    if (transcript) {

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      })

    }

  }, [transcript])

  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col items-center mb-6">

       <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-full text-sm">

          Backend Connected Successfully

        </div>

        <div className="mt-2 text-xs text-gray-500">
          Version 0.3.0 Beta
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center px-4 py-10"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          AI YouTube Summarizer
        </h1>

        <div className="mb-6 px-4 py-2 rounded-full bg-red-500/10 border border-red-500 text-red-400 text-sm">
          Powered by AI Transcript Intelligence
        </div>

        <p className="text-gray-400 mb-8 text-center max-w-xl">
          Paste a YouTube video URL to generate:

          • AI Summary  
          • Smart Notes  
          • Quiz Questions  
          • Transcript Analysis  
          • AI Statistics
        </p>

        <UrlInput
          setTranscript={setTranscript}
          setSummary={setSummary}
          setNotes={setNotes}
          setQuiz={setQuiz}
          setStats={setStats}
          setLoading={setLoading}
          setShowResults={setShowResults}
          setThumbnail={setThumbnail}
          setError={setError}
          loading={loading}
          setProcessingTime={setProcessingTime}
        />

        <button
          onClick={handleReset}
          className="mt-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl font-semibold"
        >
          Clear Results
        </button>

        {loading && <Loader />}

        {error && (

          <div className="mt-6 bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-2xl max-w-2xl w-full text-center">

            <p>{error}</p>

            <button
              onClick={() => setError("")}
              className="mt-3 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Dismiss
            </button>

          </div>

        )}

       {!showResults && !loading && (
          <div className="mt-10 flex flex-col items-center text-center">

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl mb-6"
            >
      
            </motion.div>

            <p className="text-gray-500 leading-8">

             Paste a YouTube video URL to generate:

              <br /><br />

              • AI Summary <br />
              • Smart Notes <br />
              • Quiz Questions <br />
              • Transcript Analysis <br />
              • AI Statistics

            </p>

            </div>

        )}

        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            {thumbnail && (

              <img
                src={thumbnail}
                alt="YouTube Thumbnail"
                className="mt-10 w-full max-w-3xl rounded-2xl border border-zinc-800"
              />

            )}

           <div className="mt-4 bg-white/5 border border-zinc-800 rounded-xl px-4 py-3 text-gray-400 max-w-3xl w-full">
              Video successfully processed by AI backend
           </div>

           <h2 className="mt-10 text-3xl font-bold">
              AI Analysis Results
           </h2>

            <StatsCard stats={stats} />

            <p className="mt-4 text-gray-400">
              Processing Time: {processingTime}s
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
             className="mt-10 w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 hover:scale-[1.01] transition-all duration-300"
             >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold">
                  AI Transcript Summary
                </h2>

                <button

                  onClick={() => {

                    navigator.clipboard.writeText(transcript)

                    setCopied(true)

                    setTimeout(() => {
                      setCopied(false)
                    }, 2000)

                  }}

                  className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
                >

                  {copied ? "Copied!" : "Copy Transcript"}

                </button>

                <button
                  onClick={downloadTranscript}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm ml-2"
                >
                  Download
                </button>

              </div>

              <p className="text-gray-300 leading-7">

                {
                  showFullTranscript
                   ? transcript
                   : transcript.slice(0, 700) + "..."
                }

              </p>

              <button
                onClick={() => setShowFullTranscript(!showFullTranscript)}
                className="mt-4 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg"
              >
                {showFullTranscript ? "Show Less" : "Show Full Transcript"}
              </button>

             <p className="text-gray-500 text-sm mt-4">
                Preview limited to 700 characters
             </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">

                <p>
                  Characters: {transcript.length}
               </p>

               <p>
                  Words: {transcript.split(" ").length}
               </p>

               <p>
                 Preview Length: 500 chars
               </p>

              </div>
            </motion.div>

            <SummaryCard summary={summary} />

            <NotesSection notes={notes} />

            <TimestampList />

            <QuizCard quiz={quiz} />

          </motion.div>
        )}

      </motion.div>

      <Footer />
    </>
  )
}

export default App