import React from 'react'
import ListingPricingCategory from '../components/ListingPricingCategory'
import pricing from "../data/pricing.json"
import ListingPricingCategoryDetailed from '../components/ListingPricingCategoryDetailed'
import Partners from '../components/Partners'
import ReadyToStart from '../components/ReadyToStart'

const Pricing = () => {
  return (
    <section className="mt-[80px] py-[45px]">
      <h1 className="mono-display text-center text-4xl mb-[60px] md:text-5xl">Pricing</h1>
      <div>
        {
          pricing.map((category) => (<ListingPricingCategory details = {category}/>))
        }
      </div>
      <Partners />
      <ReadyToStart />
    </section>
  )
}

export default Pricing
