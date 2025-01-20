import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { MainCarouselData } from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';



export const MainCarousel = () => {
  const items = MainCarouselData.map((item)=> <img className='cursor-pointer-z-50' 
  role='presentation' src={item.image} alt=""/>)
  return (
    <AliceCarousel
      
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
        
    />
  )
}
