const Consent = () => {
  return (
    <div className="flex place-content-between shadow-solid-black border-2 border-black px-4 py-3 w-2/5 max-h-160 overflow-scroll my-20">
      <div>
        <h1 className="font-semibold text-2xl align-text-top mt-6 mb-2 text-center">
          Consent to Participate in Research Study
        </h1>
        <div className="p-4">
          <p className="indent-8 text-justify mb-8">
            This research study, led by (NAMES) at (ORGANISATION) will help us
            to establish the efficacy of X for X, one of the main causes of hair
            loss
          </p>
          <h2 className="text-xl font-semibold my-2">Data Handling</h2>
          <p className="indent-8 text-justify mb-8">
            Some participants may find answering personal questions about
            sensitive topics (behavior, medical conditions, or lifestyle) to be
            a bit uncomfortable. As with any mode of electronic participation,
            there is always a small risk of loss of privacy. We’ll always do
            everything we can to protect your data, but no app or study can ever
            be perfectly safe from hacking. See our Privacy Policy and Data
            Security Measures, available in the app and on the web, for more
            information.
          </p>
          <h2 className="text-xl font-semibold my-2">
            Will I get advice about my health from the study?
          </h2>
          <p className="indent-8 text-justify mb-8">
            Participation does not in any way substitute for professional
            medical advice, diagnosis, or treatment that your doctor or other
            healthcare provider may give you. Always ask the advice of your
            healthcare provider if you have any questions about a medical
            condition. Do not disregard professional medical advice or delay in
            seeking care because of something you have read as part of this
            study. If you think you may have a medical emergency, call your
            doctor or dial 911 immediately.
          </p>
          <h2 className="text-xl font-semibold my-2">
            Are there benefits to participating?
          </h2>
          <p className="indent-8 text-justify mb-8">
            You will own the data submitted as psrt of the study, and will
            contribute to scientific discoveries about (hair loss).
          </p>
          <h2 className="text-xl font-semibold my-2">
            What if I want to stop? What if I have questions?
          </h2>
          <p className="indent-8 text-justify mb-8">
            You can stop participating at any time. If you have any questions or
            concerns about this project or your rights as a research participant
            you can always contact (NAMES OF STUDY LEADS) at (EMAIL?)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Consent
