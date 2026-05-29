function Loader() {
  return (

    <div className="flex flex-col justify-center items-center mt-8">

      <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="text-gray-400 mt-4 animate-pulse">
        AI is analyzing video...
      </p>

    </div>

  )
}

export default Loader