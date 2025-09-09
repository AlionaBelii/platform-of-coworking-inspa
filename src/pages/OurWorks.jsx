import React from 'react'
import { useState } from 'react';
import Categories from '../small-components/Categories'
import designers from "../data/designers.json"
import AllWorksSlider from '../components/AllWorksSlider';
import AllTestimonials from '../components/AllTestimonials';
import ReadyToStart from '../components/ReadyToStart';


const OurWorks = () => {
   const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const filtredWorks = selectedCategoryId ?
  designers.filter((designer) => designer.idCategory === selectedCategoryId) : designers

  const allWorks = filtredWorks.flatMap(designer =>
    designer.works.map(work => ({
      ...work,
      designerId: designer.id, 
      designerName: designer.full_name,
      designerPhoto: designer.photo
    }))
  )

  return (
    <section className="mt-[80px] py-[45px]">
      <h1 className="mono-display text-center text-4xl mb-[60px] md:text-5xl">Our Works</h1>

      <div className="mb-[45px]">
          <Categories selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId}/>
      </div>
      <div>
        <AllWorksSlider works = {allWorks} />
      </div>
      <AllTestimonials />
      <ReadyToStart />
    </section>
  )
}

export default OurWorks
