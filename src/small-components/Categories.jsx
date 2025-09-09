import React from 'react'
import categories from "../data/categories.json"


const Categories = ({ selectedCategoryId, setSelectedCategoryId }) => {
  
  return (
    <div className="flex flex-col gap-3 md:flex-row">
       <button
        onClick={() => setSelectedCategoryId(null)}
        className={`px-4 py-2 rounded-md border ${selectedCategoryId === null
            ? "blue-btn"
            : "stroke-btn"}`}
      >
        All
      </button>
    {
       categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategoryId(category.id)}
          className={`px-4 py-2 rounded-md border 
            ${selectedCategoryId === category.id
              ? "blue-btn"
              : "stroke-btn"}`}
        >
          {category.type}
        </button>
       ))}
    </div>
  )
}

export default Categories
