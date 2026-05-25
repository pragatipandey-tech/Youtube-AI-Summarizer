import { motion } from "framer-motion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import UrlInput from "./components/UrlInput"
import SummaryCard from "./components/SummaryCard"

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

        <SummaryCard />

      </motion.div>

      <Footer />
    </>
  )
}

export default App