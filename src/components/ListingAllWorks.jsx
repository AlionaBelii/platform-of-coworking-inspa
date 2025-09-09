import React from 'react'
import { Link } from 'react-router';
import { useState } from 'react';
import designers from "../data/designers.json"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

const ListingAllWorks = ({work}) => {
    const [selectedWork, setSelectedWork] = useState(work.works[0])

    return (
    <section>
           <div className="hidden lg:block lg:h-[600px] mt-[45px] py-[45px] relative lg:overflow-hidden rounded-lg lg:flex-col items-center justify-center">
                    <div className="w-[80%] object-center absolute top-0 translate-xy-[-50%,-50%]">
                        <img className="lg:absolute object-center object-cover z-2 lg:top-0 " src={`../images/works-designers/${selectedWork.photo}`} alt={selectedWork.name} />
                    </div>
                <div className="bg-white w-[90%] lg:max-w-[380px] p-8 rounded-lg absolute lg:right-0 lg:top-[50%] lg:translate-y-[-50%] z-10 shadow-xl">
                    <h3 className="font-bold text-xl lg:text-2xl text-center" style={{color: 'var(--blue-color)'}}>{selectedWork.name}</h3>
                    <span className="font-light italic text-sm text-center">by {selectedWork.full_name}</span>
                    <div className="flex flex-col gap-5 mt-20">
                        <p><span className="font-bold" style={{color: 'var(--black-color)'}}>Type: </span>{selectedWork.type}</p>
                        <p><span className="font-bold" style={{color: 'var(--black-color)'}}>Description: </span>{selectedWork.short_description}</p>
                        <p><span className="font-bold" style={{color: 'var(--black-color)'}}>Client: </span>{selectedWork.client}</p>
                    </div>
                </div>
           </div>
           <div className="w-full py-[45px] mt-10">
             <Swiper
             
                slidesPerView={3}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper w-full h-[450px] lg:h-[450px] "
                breakpoints={{
                    320:{
                    slidesPerView: 1,
                    spaceBetween: 5,
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                    },
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    },
                }}
                >
                    {
                        designers.map((project, index) =>(
                            <SwiperSlide className="" key={index} onClick={() => setSelectedWork(project)}>
                                    <div className="w-full">
                                        <div className="w-full flex flex-col rounded-lg lg:h-[300px]">
                                            <div className="rounded-lg overflow-hidden h-[100%] hover:shadow-xl hover:scale-[105%]">
                                                <img className="rounded-lg object-cover object-center h-[100%]" src={`../images/works-designers/${project.photo}`} alt={project.short_description} />
                                            </div>
                                            <div className="rounded-lg p-4 flex items-center justify-between">
                                                <Link to={`/designers/${work.id}`}>
                                                    <span className="p-2 text-white text-[10px] lg:text-sm rounded-lg" style={{backgroundColor: 'var(--blue-color)'}}>@{work.id}</span>
                                                </Link>
                                                <p className="text-black texr-right
                                                ">{project.type}</p>
                                            </div>
                                        </div>
                                    </div>
                            </SwiperSlide>
                    ))}
            </Swiper>
           </div>
        </section>
  )
}

export default ListingAllWorks
