import { motion } from "framer-motion"

function Footer() {
  return (

    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full text-center py-6 text-gray-500 border-t border-zinc-800 mt-20"
    >

      Built with React, Tailwind and AI

    </motion.footer>

  )
}

export default Footer