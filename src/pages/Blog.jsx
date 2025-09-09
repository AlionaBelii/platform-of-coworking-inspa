import React from 'react'
import ListingBlog from '../components/ListingBlog'
import blog from "../data/blog.json"
import { useState } from 'react'
import Categories from '../small-components/Categories'
import SubscribeInput from '../small-components/SubscribeInput'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

const Blog = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const filtredArticles = selectedCategoryId 
  ? blog.filter((article) => article.idCategory === selectedCategoryId) : blog


  return (
    <section className="mt-[80px] py-[45px]">
     <SubscribeInput />
      <h1 className="mono-display text-center text-4xl mt-[80px] mb-[60px] md:text-5xl">Blog</h1>
      <div className="mb-[45px]">
          <Categories selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId}/>
        </div>

      <div className="mb-[45px] w-full h-auto">
            <ul className="h-auto">
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
                    className="mySwiper w-full h-auto"
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
                            filtredArticles.map((article) => (
                                <SwiperSlide>
                                    <ListingBlog details={article} />
                                </SwiperSlide>
                            ))
                        }
                        
                </Swiper>
                
            </ul>
      </div>
    </section>
  )
}

export default Blog
