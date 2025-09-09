import React from 'react'

import Blob from '../components/Blob'
import Looper from '../components/Looper'

const AboutUs = () => {
  return (
    <section className="mt-[80px] py-[45px] flex">
      <div className="lg:w-1/2 relative z-10">
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl" style={{color: 'var(--black-color)'}}>Who We Are?</h1>
          <p className="text-2xl"  style={{color: 'var(--black-color)'}}>Inspa is a digital platform that bridges the gap between designers and clients. Founded with a mission to simplify the creative process, Inspa empowers both creators and businesses to connect, collaborate, and bring ideas to life.</p>
        </div>
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl">Our Mission</h1>
          <p className="text-2xl" >Our mission is simple: to make design accessible, transparent, and inspiring. We believe that great design should be available to everyone, regardless of size or budget. Through our platform, clients can easily submit design requests, choose styles and designers, and track progress in real-time. For designers, Inspa provides a space to showcase their work, manage projects, and grow their creative careers.</p>
        </div>
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl">Why Choose Inspa?</h1>
          <div className="flex gap-6 mb-6">
            <img src="./images/about/1.svg" alt="Icon" />
            <p className="text-2xl" >
              <span className="font-bold text-2xl" style={{color: 'var(--black-color)'}}>
                Top-Tier Designers <br />
              </span>
              We carefully select talented designers from around the world.
            </p>
          </div>
          <div className="flex gap-6 py-6">
            <img src="./images/about/2.svg" alt="Icon" />
            <p className="text-2xl" >
              <span className="font-bold text-2xl" style={{color: 'var(--black-color)'}}>
                Effortless Collaboration <br />
              </span>
              Streamlined communication and progress tracking for smooth project management.
            </p>
          </div>
          <div className="flex gap-6 py-6">
            <img src="./images/about/3.svg" alt="Icon" />
            <p className="text-2xl" >
              <span className="font-bold text-2xl" style={{color: 'var(--black-color)'}}>
                Transparent Pricing <br />
              </span>
              Clear and competitive rates for every design category.
            </p>
          </div>
          <div className="flex gap-6 py-6">
            <img src="./images/about/4.svg" alt="Icon" />
            <p className="text-2xl" >
              <span className="font-bold text-2xl" style={{color: 'var(--black-color)'}}>
                Custom Solutions <br />
              </span>
              Get designs tailored to your brand's voice and vision.
            </p>
          </div>
        </div>
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl">Join Our Community</h1>
          <p className="mt-[45px] text-2xl">
            <span className="font-bold text-2xl">
              Stay Inspired. Stay Updated. <br />
            </span>
            Join our community and be the first to know about exclusive design trends, new features, and special offers. Get inspiration delivered straight to your inbox!
          </p>
          <div>
            <p className="italic mt-[45px] text-2xl">Sign up now and never miss a creative beat.</p>
            <form action="" className="mt-[45px]">
              <input type="text" className="input-form" placeholder="Your Email Address"/>
              <button className="blue-btn mt-5">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <div className="opacity-55 lg:opacity-100">
          <Blob />
          <Looper />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
