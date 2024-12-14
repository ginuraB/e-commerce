import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const items = [1, 1, 1, 1, 1].map(() => <HomeSectionCard />);

    return (
        <div className='relative px-4 lg:px-8'>

            <div className='relative p-5'>
                <AliceCarousel

                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}

                />


<button 
    variant='contained' 
    className='z-50' 
    style={{ 
        position: 'absolute', 
        top: '8rem', 
        left: '0rem', 
        backgroundColor: 'white', 
        color: 'black', 
        transition: 'background-color 0.3s ease' 
    }} 
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'lightblue'} 
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
>
    <ArrowLeftIcon />
</button>

<button 
    variant='contained' 
    className='z-50' 
    style={{ 
        position: 'absolute', 
        top: '8rem', 
        right: '0rem', 
        backgroundColor: 'white', 
        color: 'black', 
        transition: 'background-color 0.3s ease' 
    }} 
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'lightblue'} 
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
>
    <ArrowRightIcon />
</button>
            </div>

        </div>
    )
}

export default HomeSectionCarousel