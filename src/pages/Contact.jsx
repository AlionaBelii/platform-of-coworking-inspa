import React from 'react'
import Blob from '../components/Blob'
import Looper from '../components/Looper'
import JoinOurCommunity from '../small-components/JoinOurCommunity'

const Contact = () => {
  return (
     <section className="mt-[80px] py-[45px] flex">
      <div className="lg:w-1/2 relative z-10">
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl" style={{color: 'var(--black-color)'}}>Contact US</h1>
          <p className="text-2xl" style={{color: 'var(--black-color)'}}>
              <span className="font-bold text-2xl" style={{color: 'var(--black-color)'}}>
                We’d Love to Hear From You! <br />
              </span>
              Whether you have a question, need assistance with a project, or want to learn more about Inspa, our team is here to help. Reach out to us through the form below or use our contact details to get in touch directly.
            </p>
        </div>
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl" style={{color: 'var(--black-color)'}}>Our Offices</h1>
          <p className="text-2xl" style={{color: 'var(--black-color)'}}>
              Inspa Headquarters <br />123 Creative Avenue, <br />Design District, London, UK
            </p>
        </div>
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl" style={{color: 'var(--black-color)'}}>Get in Touch</h1>
          <p className="text-2xl" style={{color: 'var(--black-color)'}}>
              <span className="font-bold " style={{color: 'var(--black-color)'}}>
                Phone: <br />
              </span>
              +44 123 456 789
            </p>
          <p className="mt-[45px] text-2xl" style={{color: 'var(--black-color)'}}>
              <span className="font-bold " style={{color: 'var(--black-color)'}}>
                E-mail: <br />
              </span>
              support@inspa.com
            </p>
        </div>
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl" style={{color: 'var(--black-color)'}}>Working Hours</h1>
          <p className="text-2xl" style={{color: 'var(--black-color)'}}>
              <span className="font-bold text-2xl" style={{color: 'var(--black-color)'}}>
                Monday – Friday: <br />
              </span>
              9:00 AM – 6:00 PM (GMT)
            </p>
          <p className="text-2xl mt-5" style={{color: 'var(--black-color)'}}>
              <span className="font-bold text-2xl" style={{color: 'var(--black-color)'}}>
                Saturday – Sunday: <br />
              </span>
              Closed
            </p>
        </div>
        <div className="py-5">
          <h1 className="mono-display text-left text-4xl mb-[60px] md:text-5xl" style={{color: 'var(--black-color)'}}>Follow Us</h1>
          <p className="text-2xl" style={{color: 'var(--black-color)'}}>
              <span className="font-bold text-2xl mb-5" style={{color: 'var(--black-color)'}}>
                Stay connected and get inspired: <br />
              </span>
              <a style={{color: 'var(--blue-color)'}} href="/">
                Facebook <br />
              </a>
              <a style={{color: 'var(--blue-color)'}} href="/">
                Instagram<br />
              </a>
              <a style={{color: 'var(--blue-color)'}} href="/">
                Twitter<br />
              </a>
              <a style={{color: 'var(--blue-color)'}} href="/">
                LinkedIn
              </a>
            </p>
        </div>
        <JoinOurCommunity />
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

export default Contact
