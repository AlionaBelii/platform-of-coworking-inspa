import React from 'react'
import clients from "../data/clients.json"
import ListingReviews from './ListingReviews'

const Testimonials = () => {
    return (
    <section className="mt-[80px] py-[45px] items-center">
        <h3 className="text-2xl font-bold uppercase mb-5 text-center" style={{color: 'var(--blue-color)'}}>Testimonials</h3>
        <h1 className="mono-display text-center text-3xl mb-[60px] md:text-5xl">Client's Reviews</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3">
            {
                clients.slice(1,2).map((client) => (<ListingReviews client={client}/>))
            }
        </ul>
    </section>
  )
}

export default Testimonials