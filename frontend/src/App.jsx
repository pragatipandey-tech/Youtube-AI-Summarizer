import { motion } from "framer-motion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import UrlInput from "./components/UrlInput"

function App() {
  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4"
      >

        <h1 className="text-5xl font-bold mb-4 text-center">
          AI YouTube Summarizer
        </h1>

        <p className="text-gray-400 mb-8 text-center max-w-xl">
          Paste a YouTube link and get AI-generated summaries,
          notes, timestamps and quiz questions instantly.
        </p>

        <UrlInput />

        <div className="mt-10 w-full max-w-3xl bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

          <h2 className="text-2xl font-bold mb-4">
            Video Summary
          </h2>

          <p className="text-gray-300 leading-7">
            This video explains the fundamentals of Artificial Intelligence,
            Machine Learning, and Deep Learning along with real-world applications.
          </p>

        </div>

      </motion.div>

      <Footer />
    </>
  )
}

export default App