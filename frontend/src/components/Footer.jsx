import { motion } from "framer-motion"

function Footer() {
  return (

    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full text-center py-6 text-gray-500 border-t border-zinc-800 mt-20"
    >

      <div>

        <p>
          Built with React, Tailwind and AI
        </p>

        <p className="text-gray-500 text-sm mt-2">
          Powered by React + FastAPI + AI
        </p>

      </div>

      <p className="text-sm mt-2">

        GitHub:
        pragatipandey-tech/Youtube-AI-Summarizer

      </p>

    </motion.footer>

  )
}

export default Footer