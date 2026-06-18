import { useState } from "react"
import { FileText } from "lucide-react"
import { motion } from "framer-motion"

function SummaryCard({ summary }) {

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {

    await navigator.clipboard.writeText(summary)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/10 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 hover:scale-[1.02] hover:border-red-500/40 transition-all duration-300"
    >

      <div className="flex justify-between items-center mb-4">

        <div className="flex items-center gap-2">

          <FileText size={28} />

          <h2 className="text-2xl font-bold">
            Video Summary
          </h2>

        </div>

        <button
          onClick={handleCopy}
          className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm transition-all duration-300"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

      </div>

      <p className="text-gray-300 leading-7">
        {summary}
      </p>

      <p className="text-gray-500 text-sm mt-4">
        Summary Length: {summary.length} characters
      </p>

    </motion.div>
  )
}

export default SummaryCard