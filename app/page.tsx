'use client';

import React, { useEffect } from 'react'
import Segment from '../components/main/Card/Segment';
import Carousel from '../components/main/Carousel'
import { ToastContainer } from 'react-toastify';

export default function page() {
 
  return (


    <div className='max-w-[94rem] mx-auto'>
      <>
        <Carousel />
        <div className='flex justify-center'>
          <Segment />
        </div>
        <ToastContainer limit={2} />
      </>
    </div>



  )
}
