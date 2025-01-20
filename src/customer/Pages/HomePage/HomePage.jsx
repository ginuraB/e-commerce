import React from 'react'
import { MainCarousel } from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';



const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className="space-y-5 py-10" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>



            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtas"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Sarees"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dresses"}/>
        </div>
    </div>
  )
}

export default HomePage