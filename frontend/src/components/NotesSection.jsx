import { NotebookPen } from "lucide-react"
import { motion } from "framer-motion"

function NotesSection() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-10 w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 hover:scale-[1.01] transition-all duration-300"
    >

      <div className="flex items-center gap-2 mb-4">

        <NotebookPen size={28} />

        <h2 className="text-2xl font-bold">
          Smart Notes
        </h2>

      </div>

      <button
        className="mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition-all duration-300"
      >
        Download Notes
      </button>

      <button
        className="mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition-all duration-300"
      >
      Download Notes
      </button>

      <ul className="list-disc pl-6 text-gray-300 space-y-2">
        <li>Artificial Intelligence overview</li>
        <li>Machine Learning basics</li>
        <li>Deep Learning concepts</li>
        <li>Real-world AI applications</li>
      </ul>

    </motion.div>
  )
}

export default NotesSection