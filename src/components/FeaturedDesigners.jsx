import React from 'react'
import designers from "../data/designers.json"
import ListingDesigners from './ListingDesigners';
import { Link } from 'react-router';

const FeaturedDesigners = () => {
    const featuredDesigners = designers.sort((r1, r2) => r2.reviews_count - r1.reviews_count).slice(0,3);
  return (
    <section className="mt-[80px] py-[45px]">
        <h1 className="mono-display text-center text-3xl mb-[60px] md:text-5xl">Featured Designers</h1>
        <ul className="grid grid-cols-1 gap-10 py-[40px] md:grid-cols-3">
            {
                featuredDesigners.map((designer) => (<ListingDesigners item={designer}/>))
            }
        </ul>
        <Link className="stroke-btn flex justify-self-end" to="/designers">Browse Designers ↗</Link>
    </section>
  )
}

export default FeaturedDesigners
