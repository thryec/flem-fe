import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Login from '../components/Login'

const Protected: NextPage = ({ hasReadPermission }: any) => {
  const router = useRouter()
  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div className="flex justify-center">
      <div>
        <h1>Protected Page</h1>
      </div>
    </div>
  )
}

export default Protected
