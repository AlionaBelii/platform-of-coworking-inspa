import React from 'react'
import { Link } from 'react-router'

const ListingBlog = (article) => {
    

  return (
    <li className="">
        <Link className="rounded-lg p-4 " to={`/blog/${article.details.title}`}>
            <div className="hover:shadow-md bg-white rounded-lg">
                <div className="h-[250px] overflow-hidden">
                  <img className="w-full h-full object-cover object-center rounded-lg" src={`./images/blog/${article.details.photo}`} alt={article.details.title} />
                </div>
              <div className="p-4 mt-4">
                    <span className="text-gray-500 text-sm font-medium">{article.details.category}</span>
                    <h1 className="mt-6 text-2xl font-bold" style={{color:`var(--black-color)`}}>{article.details.title}</h1>
                    <p className="text-gray-500 text-sm mt-6">{article.details.short_description}</p>
                    <button></button>
              </div>
            </div>
        </Link>
    </li>
  )
}

export default ListingBlog
