const SelectWallet = () => {
  return (
    <div className="flex space-x-10">
      <div className="shadow-solid-zinc border-2 border-black p-6 w-1/2 relative">
        <h1 className="font-semibold text-2xl align-text-top mb-20 text-center">
          I have an existing Metamask Wallet.
        </h1>
        <div className="flex justify-center mt-6">
          <button className="absolute bottom-8 shadow-solid-black text-xl text-slate-900 py-1 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none">
            Connect
          </button>
        </div>
      </div>
      <div className="shadow-solid-zinc border-2 border-black p-6 w-1/2 relative">
        <h1 className="font-semibold text-2xl align-text-top mb-20 text-center">
          I would like to create a wallet.
        </h1>
        <div className="flex justify-center mt-6">
          <button className="absolute bottom-8 shadow-solid-black text-xl text-slate-900 py-1 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none">
            Magic Link
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectWallet
