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

  const [summary, setSummary] = useState("")
  const [notes, setNotes] = useState([])
  const [quiz, setQuiz] = useState([])
  const [stats, setStats] = useState({})

  const handleReset = () => {
    setShowResults(false)
    setTranscript("")
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center px-4 py-10"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          AI YouTube Summarizer
        </h1>

        <p className="text-gray-400 mb-8 text-center max-w-xl">
          Paste a YouTube link and get AI-generated summaries,
          notes, timestamps and quiz questions instantly.
        </p>

        <UrlInput
          setTranscript={setTranscript}
          setSummary={setSummary}
          setNotes={setNotes}
          setQuiz={setQuiz}
          setStats={setStats}
          setLoading={setLoading}
          setShowResults={setShowResults}
          loading={loading}
        />

        <button
          onClick={handleReset}
          className="mt-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl font-semibold"
        >
          Clear Results
        </button>

        {loading && <Loader />}

        {!showResults && !loading && (
          <p className="mt-10 text-gray-500 text-center">
            Paste a YouTube link and generate AI insights instantly.
          </p>
        )}

        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >

            <StatsCard />

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
                  onClick={() => navigator.clipboard.writeText(transcript)}
                  className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
                >
                  Copy Transcript
                </button>

              </div>

              <p className="text-gray-300 leading-7">
                {transcript.slice(0, 500)}...
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

            <NotesSection />

            <TimestampList />

            <QuizCard />

          </motion.div>
        )}

      </motion.div>

      <Footer />
    </>
  )
}

export default App