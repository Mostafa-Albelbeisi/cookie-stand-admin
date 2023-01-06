import Link from "next/link";
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme';
import { BsFillMoonStarsFill } from 'react-icons/bs';


export default function Header() {

    const { darkTheme, toggleThemeHandler } = useContext(ThemeContext);
    console.log(darkTheme);


    return (
        <header>
            <nav className='dark:bg-gray-900 bg-[#F2DEBA] font-semibold px-10 flex flex-wrap item-center justify-between mx-auto py-3 w-100'>
                <Link href='/' className='hover:text-blue-500'>
                    <span className='text-xl dark:text-white dark:hover:text-blue-500'> Cookie Stand Admin</span>
                </Link >

                <BsFillMoonStarsFill onClick={toggleThemeHandler} className=' text-2xl dark:text-white' />



            </nav>
        </header>

    )
}