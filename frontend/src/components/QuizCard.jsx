import { CircleHelp } from "lucide-react"

function QuizCard() {
  return (
    <div className="mt-10 w-full max-w-3xl bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:scale-[1.01] transition-all duration-300">

      <div className="flex items-center gap-2 mb-4">

        <CircleHelp size={28} />

        <h2 className="text-2xl font-bold">
          Quiz Questions
        </h2>

      </div>

      <div className="space-y-4 text-gray-300">

        <p>1. What is Artificial Intelligence?</p>
        <p>2. Difference between ML and DL?</p>
        <p>3. Name one real-world AI application.</p>

      </div>

    </div>
  )
}

export default QuizCard