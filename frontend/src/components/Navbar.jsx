function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 border-b border-zinc-800">

      <h1 className="text-2xl font-bold text-white">
        VidMind AI
      </h1>

      <a
        href="https://github.com/pragatipandey-tech/Youtube-AI-Summarizer"
        target="_blank"
        className="bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-lg text-sm"
      >
        GitHub
      </a>

    </nav>
  )
}

export default Navbar