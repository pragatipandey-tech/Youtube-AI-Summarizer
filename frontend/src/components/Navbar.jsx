import { motion } from "framer-motion"

function Navbar() {
  return (

    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full flex flex-col md:flex-row justify-between items-center px-8 py-5 border-b border-zinc-800 gap-4"
    >

      <h1 className="text-2xl font-bold text-white">
        VidMind AI
      </h1>

      <a
        href="https://github.com/pragatipandey-tech/Youtube-AI-Summarizer"
        target="_blank"
        className="bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-lg text-sm transition-all duration-300"
      >
        GitHub
      </a>

    </motion.nav>

  )
}

export default Navbar