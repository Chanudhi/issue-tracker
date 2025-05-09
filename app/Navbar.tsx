import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'},
    ]
  return (
    <nav className='flex space-x-9 border-b mb-5 px-8 h24 items-center text-3xl'>
        <Link href='/'><AiFillBug/> </Link>
        <ul className='flex space-x-6'>
            {links.map(links =>(
                <Link key={links.href}
                 className='text-zinc-500 hover:text-zinc-800 transition-colors' href={links.href}>{links.label}
                </Link>
            ))}
            </ul>
    </nav>

  )
}

export default Navbar

