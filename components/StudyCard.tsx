import Image from 'next/image'
import Link from 'next/link'

const StudyCard = () => {
  return (
    <div className="shadow-solid-zinc border-2 border-black p-6">
      <div className="flex pb-6">
        <div className="p-4">
          <Image src="/logos/hairdao.png" height="80px" width="80px" />
        </div>
        <div className="w-52">
          <h1 className="text-xl font-semibold">HairDAO</h1>
          <p className="text-justify">
            HairDAO is conducting a study to establish the efficacy of X for
            treating X. This study is open to people who suffer from hair loss.
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-6">
        <Link href="/study/xx" passHref>
          <button className="shadow-solid-black text-slate-900 py-2 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none">
            Learn More
          </button>
        </Link>
        <Link href="/join/xx" passHref>
          <button className="shadow-solid-black text-slate-900 py-2 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none">
            Participate
          </button>
        </Link>
      </div>
    </div>
  )
}

export default StudyCard
