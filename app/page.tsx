'use client';

import React from 'react'
import Segment from '../components/main/Card/Segment';
import Carousel from '../components/main/Carousel'


type Props = {}

export default function page({ }: Props) {
  return (


    <div className='max-w-[94rem] '>

      <Carousel />
      <Segment />

    </div>



  )
}