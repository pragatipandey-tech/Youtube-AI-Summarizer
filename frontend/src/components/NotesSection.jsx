import { NotebookPen } from "lucide-react"

function NotesSection() {
  return (
    <div className="mt-10 w-full max-w-3xl bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:scale-[1.01] transition-all duration-300">

      <div className="flex items-center gap-2 mb-4">

        <NotebookPen size={28} />

        <h2 className="text-2xl font-bold">
          Smart Notes
        </h2>

      </div>

      <ul className="list-disc pl-6 text-gray-300 space-y-2">
        <li>Artificial Intelligence overview</li>
        <li>Machine Learning basics</li>
        <li>Deep Learning concepts</li>
        <li>Real-world AI applications</li>
      </ul>

    </div>
  )
}

export default NotesSection