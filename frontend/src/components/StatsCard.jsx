import { motion } from "framer-motion"

function StatsCard({ stats }) {

  return (

    <div className="mt-10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4">

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 text-center"
      >

        <h2 className="text-3xl font-bold text-red-500">
          {stats.words || 0}
        </h2>

        <p className="text-gray-400 mt-2">
          Total Words
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 text-center"
      >

        <h2 className="text-3xl font-bold text-blue-500">
          {stats.characters || 0}
        </h2>

        <p className="text-gray-400 mt-2">
          Characters
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 text-center"
      >

        <h2 className="text-3xl font-bold text-green-500">
          94%
        </h2>

        <p className="text-gray-400 mt-2">
          AI Accuracy
        </p>

      </motion.div>

    </div>
  )
}

export default StatsCard