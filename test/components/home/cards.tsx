import Image from 'next/image'
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
    <Link href={`/city/${props.location.toString().replaceAll(' ', '-')}`} className='w-3/4 m-auto h-80 border border-background flex cards '>
      <div className='w-1/3 h-full'>
        <Image width={700} height={700} src={props.img} className='w-full h-full object-cover' alt={`${props.location}-image`}/>
      </div>
      <div className='w-2/3 h-full flex flex-col justify-center px-5 cards__text'>
        <h2 className='text-3xl font-bold '>{`Events in ${props.location}`}</h2>
        <p className='whitespace-nowrap overflow-hidden text-ellipsis desc'>{props.desc}</p>
      </div>
    </Link>
  )
}

export default Cards
