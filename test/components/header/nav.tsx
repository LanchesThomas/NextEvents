import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav>
      <ul className='flex gap-8 list-none text-3xl '>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/events'>Events</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav
