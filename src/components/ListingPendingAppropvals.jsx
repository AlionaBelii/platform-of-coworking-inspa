import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ListingPendingAppropvals = ({pend_approvals}) => {
  return (
   <div>
        <div className="flex items-center gap-5 mb-[40px]">
            <img src={`../images/pending_approvals.svg`} alt="Icon of eye" />
            <span className="font-bold text-xl" style={{color: 'var(--blue-color)'}}>Pending approvals: {pend_approvals.length}</span>
        </div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {
                pend_approvals.map((project) => (
                <SwiperSlide>
                    <div className="mb-[80px]">
                        <div className="mt-[20px]">
                        <h2 className="font-bold text-lg">Title</h2>
                        <div className="border-b border-b-gray-200 mt-[20px] mb-[20px]"></div>
                        <p>{project.title}</p>
                        </div>
                        <div className="mt-[20px]">
                        <h2 className="font-bold text-lg">Project Type/Category</h2>
                        <div className="border-b border-b-gray-200 mt-[20px] mb-[20px]"></div>
                        <p>{project.category}</p>
                        </div>
                        
                        <div className="mt-[20px]">
                        <h2 className="font-bold text-lg">Price</h2>
                        <div className="border-b border-b-gray-200 mt-[20px] mb-[20px]"></div>
                        <p className="font-bold text-2xl" style={{ color: 'var(--blue-color)' }}>{project.price} EUR</p>
                        </div>
                        <div className="mt-[20px]">
                        <h2 className="font-bold text-lg">Designer</h2>
                        <div className="border-b border-b-gray-200 mt-[20px] mb-[20px]"></div>
                        <p>{project.designer}</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))
            }
            </Swiper>
   
       </div>
  )
}

export default ListingPendingAppropvals
