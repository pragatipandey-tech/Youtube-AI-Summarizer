import { motion } from "framer-motion"

function Loader() {
  return (

    <div className="flex flex-col items-center mt-10">

      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear"
        }}
        className="w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full"
      />

      <p className="mt-4 text-purple-400 animate-pulse">
        Gemini AI is analyzing your video...
      </p>

    </div>
  )
}

export default Loader