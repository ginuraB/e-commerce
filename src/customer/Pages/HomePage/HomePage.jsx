import React from 'react'
import { MainCarousel } from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';



const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className="space-y-5 py-10" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>



            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePage