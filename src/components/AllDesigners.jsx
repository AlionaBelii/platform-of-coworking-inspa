import React, { useState } from 'react'
import ListingDesigners from './ListingDesigners'
import designers from "../data/designers.json"
import Categories from '../small-components/Categories'
import HowItWorks from './HowItWorks'
import AllTestimonials from './AllTestimonials'
import ReadyToStart from './ReadyToStart'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

const AllDesigners = () => {

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const filtredDesigners = selectedCategoryId ?
  designers.filter((designer) => designer.idCategory === selectedCategoryId) : designers


  return (
    <section className="mt-[80px] py-[45px]">
        <h1 className="mono-display text-center text-4xl mb-[60px] md:text-5xl">Designers</h1>
        <div className="mb-[45px]">
          <Categories selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId}/>
        </div>

        <div className="w-full h-[950px]">
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper h-full w-full"
            breakpoints={{
              320:{
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {
              filtredDesigners.map((designer) => (
                <SwiperSlide>
                  <ListingDesigners item={designer} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <HowItWorks />
        <AllTestimonials />
        <ReadyToStart />
    </section>
  )
}

export default AllDesigners
