import twitter from '../public/twitter-white.svg'
import github from '../public/github-white.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex place-content-between items-center py-10 px-48 bg-black text-white">
      <Image
        src="/logos/fleming-name-logo.png"
        height="45px"
        width="140px"
        className="cursor-pointer"
      />
      <div className="space-x-10">
        <a
          href="https://twitter.com/FlemingProtocol"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={twitter} height={30} width={30} alt="twitter logo" />
        </a>
        <a
          href="https://twitter.com/FlemingProtocol"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={github} height={35} width={35} alt="github logo" />
        </a>
      </div>
    </div>
  )
}

export default Footer
