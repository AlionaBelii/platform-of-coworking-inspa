import React from 'react'


const ListingPricingCategoryDetailed = ({cat}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
      {
        cat.subcategory.map((subcat, index) => (
          <div key={index} className={`flex flex-col items-left justify-between rounded-lg p-8 ${
            index === 0
              ? 'text-white'
              : 'bg-white text-black border-gray-300'
          }`} style={index === 0 ? { backgroundColor: 'var(--blue-color)' } : {}}
          >
              <h3 className="font-bold text-2xl mb-5" style={index===0 ? { color: '#fff'} : {color: 'var(--black-color)'}}>{subcat.name}</h3>
              <p className="text-xl font-bold p-3 rounded-lg self-end" style={index === 0 ? {color: 'var(--blue-color)', backgroundColor: '#fff'} : {color: '#fff', backgroundColor: 'var(--blue-color)'}}>${subcat["price-min"]} – ${subcat["price-max"]}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ListingPricingCategoryDetailed
