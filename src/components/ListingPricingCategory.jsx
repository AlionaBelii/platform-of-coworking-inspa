import React from 'react'
import ListingPricingCategoryDetailed from './ListingPricingCategoryDetailed'

const ListingPricingCategory = ({details}) => {
  return (
    <section className="py-[45px] px-5">
      <div className="relative h-[350px] overflow-hidden">
          <h1 className="font-bold text-4xl ml-15 mb-5" style={{color: 'var(--black-color)'}}>
              {details.category}
          </h1>
          <img className="h-[560px] object-scale-down absolute top-0 right-0" src={`../public/images/pricing/${details.image}`} alt={details.category} />
      </div>
      <div className="lg:h-[350px] rounded-lg relative z-10 p-8 flex justify-center" style={{backgroundColor: 'var(--black-color)'}}>
        <ListingPricingCategoryDetailed cat={details}/>
      </div>
    </section>
  )
}

export default ListingPricingCategory
