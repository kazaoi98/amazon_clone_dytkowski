'use client';

import React from 'react'
import Segment from '../components/main/Card/Segment';
import Carousel from '../components/main/Carousel'
import { ToastContainer } from 'react-toastify';

type Props = {}

export default function page({ }: Props) {
  return (


    <div className='max-w-[94rem] mx-auto'>

      <Carousel /> 
      <div className='flex justify-center'>
        <Segment />
      </div>
      <ToastContainer limit={2}/>
    </div>
    


  )
}