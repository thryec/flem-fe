import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Login from '../components/Login'
import StudyCard from '../components/StudyCard'

const Home: NextPage = ({ hasReadPermission }: any) => {
  const router = useRouter()
  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="grid grid-cols-2 gap-10">
          <StudyCard />
          <StudyCard />
        </div>
      </div>
    </div>
  )
}

export default Home
