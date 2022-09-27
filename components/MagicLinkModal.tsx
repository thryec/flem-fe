import { useState } from 'react'
import { useAddress, useDisconnect, useMagic } from '@thirdweb-dev/react'
import { shortenAddress } from '../helpers'

interface MagicLinkModalProps {
  setMagicLinkModal: (a: boolean) => void
}

const MagicLinkModal = ({ setMagicLinkModal }: MagicLinkModalProps) => {
  const address = useAddress()
  const connectWithMagic = useMagic()
  const disconnectWallet = useDisconnect()
  const [email, setEmail] = useState('thryec@gmail.com')

  const login = async () => {
    const result = await connectWithMagic({ email })
    console.log('result', result)
  }

  return (
    <div className="fixed left-0 top-0 flex items-center inset-0 z-50 outline-none text-lg ">
      <div
        className="absolute bg-black opacity-40 inset-0 z-0"
        onClick={() => setMagicLinkModal(false)}
      />
      <div className="w-full max-w-lg p-7 relative mx-auto my-auto shadow-lg bg-white flex justify-center">
        {address ? (
          <div>
            <span>You&apos;re Connected! 👋 </span>
            <p onClick={() => disconnectWallet()}> {address}</p>
          </div>
        ) : (
          <div className="">
            <input
              type="email"
              placeholder="Your Email Address"
              className="shadow-solid-zinc border-2 border-black px-6 py-2 mr-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="border-2 border-black px-4 py-2 font-semibold shadow-solid-black hover:translate-y-0.5 hover:translate-x-0.5"
              onClick={() => login()}
            >
              Login with Email
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MagicLinkModal
