import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


export default  function NavBar2()  {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/profile" },
        { title: "Dashboard", path: "/dashboard" },
        { title: "Calls", path: "call-history" },
        { title: "History", path: "" }
    ]

    return (
        <nav className="bg-[#2D8076] border-b w-full md:static md:text-sm md:border-none text-white  z-10">
            <div className="items-center px-4  mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/" className='text-2xl font-bold'>
                       Logo
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-100 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white text-center hover:bg-white/40 p-2 rounded-md font-semibold  ">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        {/* <span className='hidden w-px h-6 bg-gray-300 md:block'></span> */}
                        <div className='space-y-3  items-center gap-x-6 md:flex md:space-y-0 flex flex-col justify-center md:flex-row '>
                            <li>
                            <IoSettingsSharp className='text-white hover:bg-white/40 p-2 rounded-md text-4xl'/>
                            </li>
                            <li>
                            <FaBell className='text-white hover:bg-white/40 p-2 rounded-md text-4xl'/>
                            </li>
                            <li>
                                {/* <a href="/signin" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                    Sign in
                                </a> */}

                               <CgProfile className='rounded-full text-2xl'/> 

                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}