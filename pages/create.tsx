import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Login from '../components/Login'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  description: string
  info: string
  website: string
  twitter: string
  github: string
}

const Create: NextPage = ({ hasReadPermission }: any) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: any) => {
    console.log('submit data: ', data)
  }

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl font-semibold my-12">
          Submit Study For Review
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <label className="block font-semibold text-lg" htmlFor="title">
                Name *
              </label>
              <span className="block text-gray-500 mb-2">
                Name of your organization/project
              </span>
              <input
                className="border-2 border-black shadow-solid-zinc px-2 py-1 w-full"
                type="text"
                {...register('name')}
              />
            </div>
            <div>
              <label className="block font-semibold text-lg" htmlFor="title">
                Description *
              </label>
              <span className="block text-gray-500 mb-2">
                Describe in short the mission of your organization/project
              </span>
              <input
                className="border-2 border-black shadow-solid-zinc px-2 py-1 w-full"
                type="text"
                {...register('description')}
              />
            </div>
            <div>
              <label className="block font-semibold text-lg" htmlFor="title">
                Info *
              </label>
              <span className="block text-gray-500 mb-2">
                Full description of what your organization/project is doing
              </span>
              <textarea
                className="border-2 border-black shadow-solid-zinc px-2 py-1 w-full"
                {...register('info')}
              />
            </div>
            <div>
              <label className="block font-semibold text-lg" htmlFor="title">
                Website *
              </label>
              <span className="block text-gray-500 mb-2">
                Link to your main website
              </span>
              <input
                className="border-2 border-black shadow-solid-zinc px-2 py-1 w-full"
                type="text"
                placeholder="https://flemingprotocol.io/"
                {...register('website')}
              />
            </div>
            <div>
              <label className="block font-semibold text-lg" htmlFor="title">
                Twitter handle *
              </label>
              <span className="block text-gray-500 mb-2">
                Your Twitter handle (e.g. @FlemingProtocol)
              </span>
              <input
                className="border-2 border-black shadow-solid-zinc px-2 py-1 w-full"
                type="text"
                placeholder="@FlemingProtocol"
                {...register('twitter')}
              />
            </div>
            <div>
              <label className="block font-semibold text-lg" htmlFor="title">
                GitHub Url
              </label>
              <span className="block text-gray-500 mb-2">
                Link to Github or open-source repositories
              </span>
              <input
                className="border-2 border-black shadow-solid-zinc px-2 py-1 w-full"
                type="text"
                placeholder="https://github.com/flemingprotocol"
                {...register('github')}
              />
            </div>
          </div>
          <div className="flex justify-center my-10">
            <button
              className="shadow-solid-black text-xl text-slate-900 py-2 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create
