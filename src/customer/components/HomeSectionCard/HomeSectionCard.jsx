import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src='https://d1hj68zhrbkzii.cloudfront.net/wp-content/uploads/2023/06/0202205986LBL-1_Mens_Shirt_Fashion-Bug-Sri-Lanka.jpg' alt=''/>
        </div>

        <div className='p-4'>
            <h3 className='text -lg font -medium text-greay-900'>Notifier</h3>
            <p className='mt -2 text-sm text-greay-500'>Men Solid staright Kurta</p>

        </div>
    </div>
  )
}

export default HomeSectionCard