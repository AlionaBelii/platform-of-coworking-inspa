import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ListingOngProjects = ({ong_project}) => {
  // let today = new Date(), date =  today.getDate() + '-' (today.getMonth() + 1) + '-' + today.getFullYear();
  
  const today = new Date();
  today.setHours(0,0,0,0);

  return (
    <div>
      <div className="flex items-center gap-5 mb-[40px]">
        <img src={`../images/ongoing_project.svg`} alt="Icon of eye" />
        <span className="font-bold text-xl" style={{color: 'var(--blue-color)'}}>Ongoing projects: {ong_project.length}</span>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {        
            ong_project.map((project, index) => {
              const [day, month, year] = project.deadline.split(".")
              const projectDate = new Date(`${year}-${month}-${day}`);
              projectDate.setHours(0,0,0,0)
              const diffTime = projectDate.getTime() - today.getTime();
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
              return (
              <SwiperSlide>
                <div key={index} className="mb-[80px]">
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
                    <h2 className="font-bold text-lg">Description</h2>
                    <div className="border-b border-b-gray-200 mt-[20px] mb-[20px]"></div>
                    <p>{project.description}</p>
                  </div>
                  <div className="mt-[20px]">
                    <h2 className="font-bold text-lg">Deadline</h2>
                    <div className="border-b border-b-gray-200 mt-[20px] mb-[20px]"></div>
                    <p>{project.deadline} <span className="font font-bold" style={{color: 'var(--blue-color)'}}>({diffDays} days last)</span></p>
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
                  <div className="mt-[20px]">
                    <h2 className="font-bold text-lg">Completed</h2>
                    <div className="border-b border-b-gray-200 mt-[20px] mb-[20px]"></div>
                    <p className="font-bold text-2xl" style={{ color: 'var(--blue-color)' }}>{project.completed} %</p>
                  </div>
                </div>
              </SwiperSlide>
              )
            })
          }
        </Swiper>
    </div>
  )
}

export default ListingOngProjects
