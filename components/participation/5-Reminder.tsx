const Reminder = () => {
  return (
    <div className="flex place-content-between shadow-solid-black border-2 border-black px-4 py-3 w-2/5 max-h-160 overflow-scroll my-20">
      <div>
        <h1 className="font-semibold text-2xl align-text-top mt-6 mb-2 text-center">
          Important
        </h1>
        <div className="p-4">
          <p className="indent-8 text-justify mb-8">
            Keep your private key in a safe place. You can share your wallet
            address but never share your private keys!
          </p>
          <p className="indent-8 text-justify mb-8">
            If you lose access and haven&apos;t backed up your wallet, you
            won&apos;t be able to access your earnings. Fleming won&apos;t be
            able to recover them for you. It&apos;s your responsibility to be
            safe and secure.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              <input type="checkbox" className="w-6 h-6" />
              <label htmlFor="checkbox" className="font-semibold">
                I have read and agree.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reminder
