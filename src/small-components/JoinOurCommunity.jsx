import React from 'react'

const JoinOurCommunity = () => {
  return (
    <div className="py-5 relative z-30 mt-[160px]">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl">Join Our Community</h1>
          <p className="mt-[45px] text-2xl">
            <span className="font-bold text-2xl">
              Stay Inspired. Stay Updated. <br />
            </span>
            Join our community and be the first to know about exclusive design trends, new features, and special offers. Get inspiration delivered straight to your inbox!
          </p>
          <div>
            <p className="italic mt-[45px] text-2xl">Sign up now and never miss a creative beat.</p>
            <form action="" className="mt-[45px] flex flex-wrap gap-5 items-center justify-stretch">
              <input type="text" className="input-form" placeholder="Your Email Address"/>
              <button className="blue-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
  )
}

export default JoinOurCommunity
