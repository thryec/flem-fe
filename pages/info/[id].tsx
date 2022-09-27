import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../../components/Login'
import Introduction from '../../components/participation/1-Intro'
import Consent from '../../components/participation/2-Consent'
import SelectWallet from '../../components/participation/3-SelectWallet'
import Privacy from '../../components/participation/4-Privacy'
import Reminder from '../../components/participation/5-Reminder'
import SignUpInfo from '../../components/participation/6-Profile'
import Eligibility from '../../components/participation/7-Eligibility'

const Info: NextPage = ({ hasReadPermission }: any) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleBack = () => {
    if (currentPage == 1) {
      return
    }
    const currPage = currentPage
    const prevPage = currPage - 1
    setCurrentPage(prevPage)
  }

  const handleNext = () => {
    if (currentPage == 7) {
      router.push('/join/xx')
      return
    }
    const currPage = currentPage
    const nextPage = currPage + 1
    setCurrentPage(nextPage)
  }

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div className="flex justify-center space-x-40">
      <div className="flex items-center">
        <button
          className="inline shadow-solid-black text-xl text-slate-900 py-2 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none"
          onClick={() => handleBack()}
        >
          Back
        </button>
      </div>
      {currentPage == 1 && <Introduction />}
      {currentPage == 2 && <Consent />}
      {currentPage == 3 && <SelectWallet />}
      {currentPage == 4 && <Privacy />}
      {currentPage == 5 && <Reminder />}
      {currentPage == 6 && <SignUpInfo />}
      {currentPage == 7 && <Eligibility />}

      <div className="flex items-center">
        <button
          className="inline shadow-solid-black text-xl text-slate-900 py-2 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Info
