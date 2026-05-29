import { useState } from "react"
import { FileText } from "lucide-react"

function SummaryCard() {

  const [copied, setCopied] = useState(false)

  const summaryText =
    "This video explains the fundamentals of Artificial Intelligence, Machine Learning, and Deep Learning along with real-world applications."

  const handleCopy = async () => {

    await navigator.clipboard.writeText(summaryText)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="mt-10 w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800 hover:scale-[1.01] transition-all duration-300">

      <div className="flex justify-between items-center mb-4">

        <div className="flex items-center gap-2">

          <FileText size={28} />

          <h2 className="text-2xl font-bold">
            Video Summary
          </h2>

        </div>

        <button
          onClick={handleCopy}
          className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm transition-all duration-300"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

      </div>

      <p className="text-gray-300 leading-7">
        {summaryText}
      </p>

    </div>
  )
}

export default SummaryCard