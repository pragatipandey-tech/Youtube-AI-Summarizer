import { Clock3 } from "lucide-react"

function TimestampList() {
  return (
    <div className="mt-10 w-full max-w-3xl bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:scale-[1.01] transition-all duration-300">

      <div className="flex items-center gap-2 mb-4">

        <Clock3 size={28} />

        <h2 className="text-2xl font-bold">
          Video Timestamps
        </h2>

      </div>

      <div className="space-y-3 text-gray-300">

        <p>00:00 - Introduction to AI</p>
        <p>02:45 - Machine Learning Basics</p>
        <p>06:20 - Deep Learning Concepts</p>
        <p>10:15 - Real-world Applications</p>

      </div>

    </div>
  )
}

export default TimestampList