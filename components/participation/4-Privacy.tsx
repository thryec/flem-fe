const Privacy = () => {
  return (
    <div className="flex place-content-between shadow-solid-black border-2 border-black px-4 py-3 w-2/5 max-h-160 overflow-scroll my-20">
      <div>
        <h1 className="font-semibold text-2xl align-text-top mt-6 mb-2 text-center">
          Privacy Policy
        </h1>
        <div className="p-4">
          <p className="indent-8 text-justify mb-8">
            Before we start, check out the Terms of Service so you know what to
            expect when using Fleming Protocol.
          </p>
          <p className="indent-8 text-justify mb-8">
            As Fleming Protocol captures your data it&apos;s important that you
            read and understand what that involves before continuing. You can
            find everything you need to know in the Privacy Policy.
          </p>
          <p className="indent-8 text-justify mb-8">
            You can always visit the Privacy Policy and Terms of Service through
            the FAQ section of the Fleming Protocol website.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              <input type="checkbox" className="w-6 h-6" />
              <label htmlFor="checkbox" className="font-semibold">
                Agree to Privacy Policy
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
