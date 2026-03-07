import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Section3() {
    return (
        <div className='container pt-5'>
            <div className='flex flex-row justify-between items-center py-5'>
                <h2 className='font-clash text-4xl font-semibold text-neutral'>Explore by <span className='text-secondary'>category</span></h2>
                <Link href="/jobs" className='text-primary font-epilogue font-medium flex flex-row gap-x-3 items-center group'>Show All Jobs <FaArrowRight className=' duration-200' /></Link>
            </div>
        </div>
    )
}

export default Section3