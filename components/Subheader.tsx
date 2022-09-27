import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className="flex items-center place-content-between py-6 px-48 bg-slate-900 text-white">
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Explore Studies</h1>
        <p>View & participate active decentralized clinical trial studies</p>
      </div>
      <Link href="/create" passHref>
        <button className="shadow-solid-lightpurple text-lg text-slate-900 py-2 px-3 bg-white font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none">
          Create a Study
        </button>
      </Link>
    </div>
  )
}

export default SubHeader
