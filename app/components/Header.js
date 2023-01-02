import React from 'react'
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <nav className='bg-[#F2DEBA] py-3 p-4 font-semibold'>
                <Link href='/' className='hover:text-blue-500'>
                    <span className='text-xl '> Cookie Stand Admin</span>
                </Link >
            </nav>
        </header>

    )
}