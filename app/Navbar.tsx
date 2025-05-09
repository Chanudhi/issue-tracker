'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames';

const Navbar = () => {
    const currentPath = usePathname();

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'},
    ]
  return (
    <nav className='flex space-x-9 border-b mb-5 px-8 h-14 items-center text-xl'>
        <Link href='/'><AiFillBug/> </Link>
        <ul className='flex space-x-6 ml-6'>
            {links.map(links =>(
                <Link key={links.href}
                 className={`${links.href==currentPath ? 'text-zinc-900':'text-zinc-500'} hover:text-zinc-800 transition-colors`} href={links.href}>{links.label}
                </Link>
            ))}
            </ul>
    </nav>

  )
}

export default Navbar

