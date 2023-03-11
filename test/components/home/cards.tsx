import Link from 'next/link'
import React from 'react'

interface Props {
    id: number,
    location: string,
    img: string,
    desc: string
}

const Cards = (props: Props) => {
  return (
    <Link href={`/events/${props.id}`} className='w-3/4 m-auto h-80 border border-background flex cards'>
      <div className='w-1/3 h-full'>
        <img src={props.img} className='w-full h-full object-cover'/>
      </div>
      <div className='w-2/3 h-full flex flex-col justify-center px-5 cards__text'>
        <h2 className='text-3xl font-bold'>{`Events in ${props.location}`}</h2>
        <p>{props.desc}</p>
      </div>
    </Link>
  )
}

export default Cards
