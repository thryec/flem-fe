import Link from 'next/link'
import Image from 'next/image'
import SubHeader from './Subheader'
import MagicLinkModal from './MagicLinkModal'
import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/outline'
import {
  useAddress,
  useMagic,
  useDisconnect as useMagicDisconnect,
} from '@thirdweb-dev/react'
import {
  useAccount,
  useConnect,
  useDisconnect as useWagmiDisconnect,
} from 'wagmi'
import { shortenAddress } from '../helpers'

const Header = () => {
  const [walletModal, setMagicLinkModal] = useState<boolean>(false)
  // thirdweb magic hooks
  const magicAddress = useAddress()
  const disconnectMagicWallet = useMagicDisconnect()

  // wagmi metamask hooks
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { address: metamaskAddress, isConnected } = useAccount()
  const { disconnect } = useWagmiDisconnect()

  return (
    <div>
      {walletModal && <MagicLinkModal setMagicLinkModal={setMagicLinkModal} />}
      <div className="flex place-content-between items-center pt-10 pb-6 px-48 bg-black text-white">
        <div className="space-x-10 flex items-center">
          <Link href="/" passHref>
            <Image
              src="/logos/fleming-logo.png"
              height="80px"
              width="80px"
              className="cursor-pointer"
            />
          </Link>

          <div className="space-x-6 items-center inline">
            <Link href="/" passHref>
              <span className="cursor-pointer font-semibold text-xl">
                For Participants
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="cursor-pointer font-semibold text-xl">
                For Researchers
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="cursor-pointer font-semibold text-xl">FAQ</span>
            </Link>
          </div>
        </div>
        {metamaskAddress ? (
          <button
            className="bg-zinc-200 px-4 py-2 text-black font-semibold cursor-pointer"
            onClick={() => disconnect()}
          >
            {shortenAddress(metamaskAddress)}
          </button>
        ) : magicAddress ? (
          <button
            className="bg-zinc-200 px-4 py-2 text-black font-semibold cursor-pointer"
            onClick={() => disconnectMagicWallet()}
          >
            {shortenAddress(magicAddress)}
          </button>
        ) : (
          <div className="space-x-4">
            {connectors.map((connector) => (
              <button
                className="text-lg text-slate-900 py-2 px-3 bg-white font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5"
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                Metamask
              </button>
            ))}
            {error && <span>{error.message}</span>}
            <button
              className="text-lg text-slate-900 py-2 px-3 bg-white font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5"
              onClick={() => setMagicLinkModal(true)}
            >
              Magic Link
            </button>
          </div>
        )}
      </div>
      <SubHeader />
    </div>
  )
}

export default Header
