import React from 'react'
import Card from './Card'

type Props = {id: number, title: string, img: string, price: string, rating: number}

const items = [
  { id: 1, title: 'Gaming headset of hell', img: 'https://m.media-amazon.com/images/I/41JEZ2rg66L._AC_SX679_.jpg', price: '129.90', rating: 3.6},
  { id: 2, title: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray AppleCare', img: 'https://m.media-amazon.com/images/I/61RJpnloBJL._AC_SX522_.jpg', price: '998.00', rating: 5},
  { id: 3, title: 'Lenovo IdeaPad Gaming 3 - 2022 - Everyday Gaming Laptop - NVIDIA GeForce RTX 3050 Graphics - 15.6" FHD Display - 120 Hz - AMD Ryzen 5 6600H - 8GB DDR5 - 258GB SSD - Win 11 - Free 3-month Xbox GamePass', img: 'https://m.media-amazon.com/images/I/81zcUyiNcUL._AC_SX679_.jpg', price: '549.99', rating: 2.1 },
  { id: 4, title: 'ROG Strix G10DK Gaming Desktop PC', img: 'https://m.media-amazon.com/images/I/71ByNPM6QdL._AC_SX679_.jpg', price: '769.99', rating: 4.4 },
  { id: 5, title: 'Kingston 240GB A400 SATA 3 2.5" Internal SSD SA400S37/240G - HDD Replacement for Increase Performance', img: 'https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SX679_.jpg', price: '19.99', rating: 3.5 },
  { id: 6, title: 'AMD Ryzen 5 5600G', img: 'https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SX679_.jpg', price: '127.97', rating: 2.7 },

]

export default function Segment({ }: Props) {
  return (
    <div className='flex flex-row flex-wrap max-w-[1480px] overflow-hidden z-[1] opacity-100 px-2 mr-8 justify-start'>

      {items.map((data: Props, idx: number) => (
          <>
            < Card product={data} />
          </>
      ))}

    </div>
  )
}