import { useState } from 'react'
import Cookies from 'universal-cookie'
import consts from '../cookies'

const Login = ({ redirectPath }: any) => {
  const [password, setPassword] = useState('')

  return (
    <div className="w-1/3 max-w-sm mx-auto text-xl">
      <form>
        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            type="text"
            className="form-input mt-1 block w-full bg-gray-50"
            placeholder="Your site password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          className="mt-3 bg-violet-500 text-white p-2 font-bold rounded hover:bg-violet-700"
          onClick={(e) => {
            e.preventDefault()
            const cookies = new Cookies()
            cookies.set(consts.SiteReadCookie, password, {
              path: '/',
            })
            window.location.href = redirectPath ?? '/'
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
