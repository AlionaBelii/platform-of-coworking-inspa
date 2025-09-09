import React from 'react'
import { Link } from 'react-router'

const ListingDesigners = (designer) => {
  return (
    <li className="bg-white p-[20px] hover:shadow-lg">
        <Link to={`/designers/${designer.item.id}`}
         className="flex flex-col items-center">
            <img className="rounded-full object-center object-cover w-[200px] h-[200px]" src={`/images/designers/${designer.item.photo}`}
    alt={designer.item.photo} />
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2 w-[300px]">
                <div className="flex items-center justify-center gap-1 py-1 px-5 rounded-md text-[10px] text-white" style={{backgroundColor: 'var(--blue-color)'}}><img src="./public/images/designers/project-done_icon.svg" alt="Icon of project"></img> <span>+</span> {designer.item.projects_count} <span>projects</span> </div>
                <div className="flex items-center justify-center gap-1 py-1 px-5 rounded-md text-[10px] text-white" style={{backgroundColor: 'var(--blue-color)'}}><img src="./public/images/designers/years_icon.svg" alt="Icon of calendar"></img> {designer.item.experience_years} <span>years</span> </div>
                <div className="flex items-center justify-center gap-1 py-1 px-5 rounded-md text-[10px] text-white" style={{backgroundColor: 'var(--blue-color)'}}><img src="./public/images/designers/star_icon.svg" alt="Icon of star"></img> <span>+</span>{designer.item.reviews_count} <span>reviews</span> </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-xl mt-4 text-center">{designer.item.full_name}</h1>
                <span className="px-4 py-2 rounded-md text-sm capitalize text-center" style={{backgroundColor: 'var(--lightgray-color)'}}>{designer.item.role}</span>
            </div>
        </Link>
        
    </li>
  )
}

export default ListingDesigners
