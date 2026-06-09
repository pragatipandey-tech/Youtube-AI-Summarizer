import { CircleHelp } from "lucide-react"
import { motion } from "framer-motion"

function QuizCard({ quiz }) {
  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-10 w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 hover:scale-[1.02] hover:border-red-500/40 transition-all duration-300"
    >

      <div className="flex items-center gap-2 mb-4">

        <CircleHelp size={28} />

        <h2 className="text-2xl font-bold">
          Quiz Questions
        </h2>

      </div>

      <div className="space-y-4 text-gray-300">

        {
          quiz.map((question, index) => (
            <p key={index}>
              {index + 1}. {question}
            </p>
          ))
        }

      </div>

    </motion.div>
  )
}

export default QuizCard