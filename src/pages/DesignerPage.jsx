import React from 'react'
import designers from "../data/designers.json"
import { useParams } from 'react-router'
import ListingWorks from '../components/ListingWorks'
import DesignerReview from '../components/DesignerReview'

const DesignerPage = () => {
    const { id } = useParams()
    const designer = designers.find((designer) => designer.id == id)
    
    if (designer)
    {
        return (
            <section className="mt-[80px] py-[45px]">
                <div className="flex flex-col items-center">
                    <h1 className="mono-display text-4xl mb-[20px] md:text-5xl text-center">{designer.full_name}</h1>
                    <span className="px-4 py-2 rounded-md text-xl capitalize text-center" style={{backgroundColor: 'var(--lightgray-color)'}}>{designer.role}</span>
                </div>
                <div className="flex flex-col items-center gap-30 md:flex-row mt-10">
                    <div className="flex flex-col items-center">
                        <img className="rounded-full object-center object-cover w-[450px] h-[450px]" src={`/images/designers/${designer.photo}`}
                        alt={designer.photo} />
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-2 w-[450px]">
                            <div className="flex items-center justify-center gap-1 py-3 px-6 rounded-md text-[16px] text-white" style={{backgroundColor: 'var(--blue-color)'}}><img src="../public/images/designers/project-done_icon.svg" alt="Icon of project"></img> <span>+</span> {designer.projects_count} <span>projects</span> </div>
                            <div className="flex items-center justify-center gap-1 py-3 px-6  rounded-md text-[16px] text-white" style={{backgroundColor: 'var(--blue-color)'}}><img src="../public/images/designers/years_icon.svg" alt="Icon of calendar"></img> {designer.experience_years} <span>years</span> </div>
                            <div className="flex items-center justify-center gap-1 py-3 px-6 rounded-md text-[16px] text-white" style={{backgroundColor: 'var(--blue-color)'}}><img src="../public/images/designers/star_icon.svg" alt="Icon of star"></img> <span>+</span>{designer.reviews_count} <span>reviews</span> </div>
                        </div>
                    </div>
                    <div>
                        <p>{designer.about_me}</p>
                    </div>
                </div>

                <div>
                    <h1 className="mono-display text-3xl mb-[20px] mt-[45px] md:text-5xl text-center">My Projects</h1>
                    <div> 
                            <div>
                                <ListingWorks work={designer} />
                            </div>

                            <div className="bg-white h-[600px]">
                                <DesignerReview designerName={designer.full_name} />
                            </div>
                    </div>    
                </div>
            </section>
        )
    }
    else 
    {
        return (
            <div>404</div>
        )
    }
}

export default DesignerPage
