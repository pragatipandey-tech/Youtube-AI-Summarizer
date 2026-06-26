import { Clock3 } from "lucide-react"
import { motion } from "framer-motion"

function TimestampList({ timestamps }) {
  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
     className="mt-10 w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 hover:scale-[1.02] hover:border-red-500/40 transition-all duration-300"
    >

      <div className="flex items-center gap-2 mb-4">

        <Clock3 size={28} />

        <h2 className="text-2xl font-bold">
          Video Timestamps
        </h2>

      </div>

      <div className="space-y-3 text-gray-300">

        {
          timestamps.length > 0 ? (

            timestamps.map((time, index) => (
              <p key={index}>{time}</p>
            ))

          ) : (

            <p className="text-gray-500">
              No timestamps generated yet.
           </p>

          )
        }

      </div>

    </motion.div>
  )
}

export default TimestampList