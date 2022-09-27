import Cookies from 'universal-cookie'
import Login from '../components/Login'
import consts from '../cookies'

export default function LoginPage({ hasReadPermission }: any) {
  if (hasReadPermission) {
    return (
      <>
        <div className="w-1/3 max-w-sm mx-auto">
          <button
            className="mt-3 bg-violet-500 text-white p-2 font-bold rounded hover:bg-violet-700"
            onClick={(e) => {
              e.preventDefault()
              const cookies = new Cookies()
              cookies.remove(consts.SiteReadCookie, { path: '/' })
              window.location.href = '/login'
            }}
          >
            Logout
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Login redirectPath="/" />
    </>
  )
}
