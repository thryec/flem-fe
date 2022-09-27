import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Login from '../../components/Login'
import { PlusIcon, UserCircleIcon } from '@heroicons/react/outline'

const Study: NextPage = ({ hasReadPermission }: any) => {
  const router = useRouter()

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="p-10">
        <div className="border-2 rounded-lg space-y-4 p-6">
          <div>
            <h1 className="font-semibold text-lg bg-lightpurple px-2 py-1 mb-2 border-2 border-black">
              Participants
            </h1>
            <div className="flex space-x-6">
              <UserCircleIcon className="h-8 w-8 text-slate-500 cursor-pointer" />
              <UserCircleIcon className="h-8 w-8 text-slate-500 cursor-pointer" />
              <UserCircleIcon className="h-8 w-8 text-slate-500 cursor-pointer" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-lg bg-lightpurple px-2 py-1 mb-2 border-2 border-black">
              Criteria
            </h1>
            <div className="space-y-2">
              <div className="flex place-content-between">
                <span>Adult 18+</span>
                <span>(2)</span>
              </div>
              <div className="flex place-content-between">
                <span>Adolescent 13-17 </span>
                <span>(0)</span>
              </div>
              <div className="flex place-content-between">
                <span>Child 3-12</span>
                <span>(0)</span>
              </div>
              <div className="flex place-content-between">
                <span>Infant 0-2</span>
                <span>(0)</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-lg bg-lightpurple px-2 py-1 mb-2 border-2 border-black">
              Gender
            </h1>
            <div className="space-y-2">
              <div className="flex place-content-between">
                <span>Male</span>
                <span>(2)</span>
              </div>
              <div className="flex place-content-between">
                <span>Female</span>
                <span>(2)</span>
              </div>
              <div className="flex place-content-between">
                <span>All Genders</span>
                <span>(2)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="space-y-4">
          <div className="shadow-solid-black border-2 border-black px-4 py-3 font-semibold w-100 flex place-content-between items-center">
            Why are we doing this study?{' '}
            <PlusIcon className="h-8 w-8 text-black cursor-pointer" />
          </div>
          <div className="shadow-solid-black border-2 border-black px-4 py-3 font-semibold w-100 flex place-content-between items-center">
            What are the benefits of participating?{' '}
            <PlusIcon className="h-8 w-8 text-black cursor-pointer" />
          </div>
          <div className="shadow-solid-black border-2 border-black px-4 py-3 font-semibold w-100 flex place-content-between items-center">
            What are the risks?{' '}
            <PlusIcon className="h-8 w-8 text-black cursor-pointer" />
          </div>
           
          <div className="shadow-solid-black border-2 border-black px-4 py-3 font-semibold w-100 flex place-content-between items-center">
            Who funds the study?{' '}
            <PlusIcon className="h-8 w-8 text-black cursor-pointer" />
          </div>
          <div className="shadow-solid-black border-2 border-black px-4 py-3 font-semibold w-100 flex place-content-between items-center">
            Is my data confidential?{' '}
            <PlusIcon className="h-8 w-8 text-black cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="p-10 space-y-6">
        <Link href="/info/xx" passHref>
          <button className="shadow-solid-black text-slate-900 py-2 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none">
            Join Study
          </button>
        </Link>
        <div className="shadow-solid-black border-2 border-black px-4 py-3 font-semibold w-100 flex place-content-between items-center">
          <h1 className="font-semibold text-lg px-2 py-1 mb-2">Team</h1>
        </div>
      </div>
    </div>
  )
}

export default Study
