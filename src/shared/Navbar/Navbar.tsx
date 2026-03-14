"use client"
// import { Link } from '@/i18n/navigation';
import { FaFacebookF, FaInstagram, FaRegUser, FaTwitter } from "react-icons/fa"
import SmNavSheet from "./SmNavsheet"
import logo from "../../../public/logo.png"
import Image from 'next/image'
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { ChevronDown } from 'lucide-react'
import { TbWorld } from "react-icons/tb"
import { usePathname } from "next/navigation"
import Link from "next/link"


export const navitems = [
    // {
    //     id: 1,
    //     rout: "/",
    //     label: "Home"
    // },
    // {
    //     id: 2,
    //     rout: "/#services",
    //     label: "Services"
    // },
    {
        id: 3,
        rout: "/#pricing",
        label: "pricing"
    },
    {
        id: 4,
        rout: "/about",
        label: "about"
    },
]

function Navbar() {
    const pathname = usePathname();

    const handleMoveProfile = () => {

    }

    return (

        <>
            {/* --------------section 1-------------- */}

            <div className='bg-[#F8F8FD] sticky top-0 z-50 left-0'>
                <div className='container'>
                    <div className=' flex flex-row justify-between items-center gap-x-5 py-3'>
                        <div className="flex flex-row justify-between items-center gap-x-8">
                            <Link href={"/"}>
                                <Image src={logo} alt='logo' className='h-6 md:h-7 xl:h-9 w-auto object-cover' />
                            </Link>

                            <ul className='lg:flex flex-row gap-x-5 lg:gap-x-8 items-center hidden'>

                                <li className='font-epilogue text-base text-neutral/80 font-medium hover:text-primary duration-200'>
                                    <Link href={"/jobs"}>
                                        Find Jobs
                                    </Link>
                                </li>

                                <li className='font-epilogue font-medium text-base text-neutral/80 hover:text-primary duration-200'>
                                    <Link href={"/#"}>
                                        Browse Companies
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <div className="flex flex-row gap-x-2.5 md:gap-x-4 lg:gap-x-5 items-center">

                            <Link href={"/admin"} className="font-epilogue font-bold text-primary">Login</Link>

                            <div className="w-px bg-neutral/20 h-8"></div>

                            <button className='cursor-pointer text-white border-0 bg-primary hover:bg-primary/80 duration-200 px-5 py-3 font-epilogue font-bold'>
                                Sign Up
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar