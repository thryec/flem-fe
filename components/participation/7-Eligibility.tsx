const Eligibility = () => {
  return (
    <div className="flex place-content-between justify-center shadow-solid-black border-2 border-black px-4 py-3 w-2/5 max-h-160 overflow-scroll my-20">
      <div>
        <h1 className="font-semibold text-2xl align-text-top mt-6 mb-4 text-center">
          HairDAO Trial Eligibility Criteria
        </h1>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <span>I am 18+ years old</span>
            <input type="checkbox" className="w-6 h-6" />
          </div>
          <div className="flex items-center space-x-4">
            <span>I suffer from x</span>
            <input type="checkbox" className="w-6 h-6" />
          </div>
          <div className="flex items-center space-x-4">
            <span>I am able to give adequate consent</span>
            <input type="checkbox" className="w-6 h-6" />
          </div>
          <div className="flex items-center space-x-4">
            <span>I have a good grasp of English</span>
            <input type="checkbox" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eligibility
