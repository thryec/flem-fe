const Introduction = () => {
  return (
    <div className="flex place-content-between shadow-solid-black border-2 border-black px-4 py-3 w-2/5 max-h-160 overflow-scroll my-20">
      <div>
        <h1 className="font-semibold text-2xl align-text-top mt-6 mb-2 text-center">
          Here&apos;s how participation works:
        </h1>
        <p className="indent-8 text-justify p-4">
          We hope you will sign up, but it is completely voluntary. When you
          sign up for this study, we&apos;ll collect some basic information
          about you. We&apos;ll ask you some questions each week, and
          occasionally more often, and invite you to participate in OPTIONAL
          study opportunities, including connecting your Azumio apps and
          smartphone GPS.
        </p>
        <p className="indent-8 text-justify p-4">
          In the future, we may also ask you to connect other devices or apps.
          We&apos;ll notify you via push notification on your smartphone, email,
          and/or text message when new we&apos;ll send reminders by email when
          data is due for the trial. Sign up and your first set of surveys will
          take about 20-25 minutes, and then we&apos;ll ask for about 5-15 more
          minutes of your time per week.
        </p>
      </div>
    </div>
  )
}

export default Introduction
