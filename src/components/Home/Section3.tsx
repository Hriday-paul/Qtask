import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import c1 from "../../../public/home/sec3/c1.png"
import c2 from "../../../public/home/sec3/c2.png"
import c3 from "../../../public/home/sec3/c3.png"
import c4 from "../../../public/home/sec3/c4.png"
import c5 from "../../../public/home/sec3/c5.png"
import c6 from "../../../public/home/sec3/c6.png"
import c7 from "../../../public/home/sec3/c7.png"
import c8 from "../../../public/home/sec3/c8.png"
import Image from 'next/image'

function Section3() {
    return (
        <div className='container pt-4 md:pt-6 lg:pt-8'>
            <div className='flex flex-row justify-between items-center py-2 md:py-4 lg:py-5'>
                <h2 className='font-clash text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral'>Explore by <span className='text-secondary'>category</span></h2>
                <Link href="/jobs" className='text-sm md:text-base text-primary font-epilogue font-medium flex flex-row gap-x-3 items-center group'>Show All Jobs <FaArrowRight className=' duration-200' /></Link>
            </div>
            <Categories />
        </div>
    )
}

export default Section3;

const categoryList = [
    {
        id: 1,
        title: "Desing",
        subtitle: "235 jobs available",
        icon: c1,
    },
    {
        id: 2,
        title: "Sales",
        subtitle: "768 jobs available",
        icon: c2,
    },
    {
        id: 3,
        title: "Marketing",
        subtitle: "235 jobs available",
        icon: c3,
    },
    {
        id: 4,
        title: "Finance",
        subtitle: "235 jobs available",
        icon: c4,
    },
    {
        id: 5,
        title: "Technology",
        subtitle: "436 jobs available",
        icon: c5,
    },
    {
        id: 6,
        title: "Engineering",
        subtitle: "542 jobs available",
        icon: c6,
    },
    {
        id: 7,
        title: "Business",
        subtitle: "140 jobs available",
        icon: c7,
    },
    {
        id: 8,
        title: "Human Resource",
        subtitle: "235 jobs available",
        icon: c8,
    },
]

const Categories = () => {
    return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 md:py-8 lg:py-10'>
        {
            categoryList?.map(category=>{
                return <div key={category?.id} className='border border-neutral/20 p-5 md:p-8 space-y-2 md:space-y-3 hover:bg-primary duration-200 group cursor-pointer'>
                    <Image src={category?.icon} alt='icon' className='h-10 md:h-12 w-auto mb-3 md:mb-8 group-hover:brightness-0 group-hover:invert' />
                    <h6 className='font-clash font-semibold text-lg md:text-xl text-neutral group-hover:text-white'>{category?.title}</h6>
                    <p className='font-epilogue text-neutral/80 group-hover:text-gray-200 text-sm md:text-lg flex flex-row gap-x-2 items-center'>{category?.subtitle}</p>
                </div>
            })
        }
    </div>
}