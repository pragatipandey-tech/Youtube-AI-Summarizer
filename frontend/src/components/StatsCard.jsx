import { motion } from "framer-motion"

function StatsCard() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4"
    >

      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 text-center hover:scale-[1.02] transition-all duration-300">

        <h2 className="text-3xl font-bold text-red-500">
          12m
        </h2>

        <p className="text-gray-400 mt-2">
          Video Length
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 text-center hover:scale-[1.02] transition-all duration-300">

        <h2 className="text-3xl font-bold text-blue-500">
          94%
        </h2>

        <p className="text-gray-400 mt-2">
          AI Accuracy
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 text-center hover:scale-[1.02] transition-all duration-300">

        <h2 className="text-3xl font-bold text-green-500">
          4
        </h2>

        <p className="text-gray-400 mt-2">
          Key Topics
        </p>

      </div>

    </motion.div>

  )
}

export default StatsCard