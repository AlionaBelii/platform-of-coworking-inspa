import React from 'react'

const SubscribeInput = () => {
  return (
     <div className="flex flex-col w-full py-[45px]">
            <p className="italic text-2xl">Sign up now and never miss a creative beat.</p>
            <form action="" className="mt-[45px] flex flex-row flex-wrap lg:flex-nowrap items-center gap-5">
              <input type="text" className="input-form w-full" placeholder="Your Email Address"/>
              <button className="blue-btn">
                Subscribe
              </button>
            </form>
    </div>
  )
}

export default SubscribeInput
