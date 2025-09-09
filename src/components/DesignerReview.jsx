import React from 'react'
import clients from "../data/clients.json"
import ListingClients from '../components/ListingClients'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

const DesignerReview = ({ designerName }) => {
    const filtredReviews = clients.flatMap(client => 
        client.reviews  
        ?.filter(review => review.designer === designerName)
        .map(review => ({...review, client }))
    )
    if (filtredReviews === 0) return null
  return (
    <section className="mt-[80px] py-[45px] items-center">
        <h3 className="text-2xl font-bold uppercase mb-5 text-center" style={{color: 'var(--blue-color)'}}>Testimonials</h3>
        <h1 className="mono-display text-center text-3xl mb-[60px] md:text-5xl">Client's Reviews</h1>
        <ul className="w-full h-[600px]">
            
            <Swiper    
                slidesPerView={3}
                grid={{
                    rows: 1,
                    fill: 'row'
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                
                slidesPerGroup={1}
                
                modules={[Grid, Pagination]}
                className="mySwiper h-[600px] w-full"
                breakpoints={{
                    320:{
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 1,
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
                        filtredReviews.map((rev) => (
                            <SwiperSlide>
                                <li className="bg-white p-[20px]">
                                    <img className="mb-5 ml-5 mt-10" src="./images/quote-icon.svg" alt="" />
                                    <div>
                                        <p className="italic">{rev.text}</p>
                                    </div>
                                    <ListingClients item={rev.client} />
                                </li>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>

        </ul>
    </section>
  )
}

export default DesignerReview
