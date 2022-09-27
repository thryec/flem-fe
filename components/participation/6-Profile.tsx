const SignUpInfo = () => {
  return (
    <div className="flex place-content-between justify-center shadow-solid-black border-2 border-black px-4 py-3 w-2/5 max-h-160 overflow-scroll my-20">
      <div>
        <h1 className="font-semibold text-2xl align-text-top mt-6 mb-2 text-center">
          Your Profile
        </h1>
        <div className="p-4 space-y-6">
          <div>
            <label className="text-xl mb-2 block" htmlFor="gender">
              Gender
            </label>
            <select
              className="bg-gray-200 px-4 py-2 w-52 border-2 border-black font-semibold text-xl"
              name="gender"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-xl mb-2 block" htmlFor="age">
              Age
            </label>
            <select
              className="bg-gray-200 px-4 py-2 w-52 border-2 border-black font-semibold text-xl"
              name="age"
              id="age"
            >
              <option value="infant">0-2</option>
              <option value="child">3-12</option>
              <option value="adolscent">13-17</option>
              <option value="adult">18+</option>
            </select>
          </div>
          <div>
            <label className="text-xl mb-2 block" htmlFor="country">
              Country
            </label>
            <select
              className="bg-gray-200 px-4 py-2 w-52 border-2 border-black font-semibold text-xl"
              name="country"
              id="country"
            >
              <option value="uk">UK</option>
              <option value="usa">USA</option>
              <option value="ireland">Ireland</option>
              <option value="singapore">Singapore</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpInfo
