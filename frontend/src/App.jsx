import { motion } from "framer-motion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import UrlInput from "./components/UrlInput"
import SummaryCard from "./components/SummaryCard"
import NotesSection from "./components/NotesSection"
import TimestampList from "./components/TimestampList"
import QuizCard from "./components/QuizCard"
import { useState } from "react"
import Loader from "./components/Loader"

function App() {

  const [showResults, setShowResults] = useState(false)

  const [loading, setLoading] = useState(false)

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center px-4 py-10"
      >

        <h1 className="text-5xl font-bold mb-4 text-center">
          AI YouTube Summarizer
        </h1>

        <p className="text-gray-400 mb-8 text-center max-w-xl">
          Paste a YouTube link and get AI-generated summaries,
          notes, timestamps and quiz questions instantly.
        </p>

        <UrlInput />

        <button
          onClick={() => {

            setLoading(true)

            setTimeout(() => {
              setLoading(false)
              setShowResults(true)
            }, 2500)

          }}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
        >
          Show AI Results
        </button>

        {loading && <Loader />}

        {showResults && (
          <>
            <SummaryCard />

            <NotesSection />

            <TimestampList />

            <QuizCard />
          </>
        )}

      </motion.div>

      <Footer />
    </>
  )
}

export default App