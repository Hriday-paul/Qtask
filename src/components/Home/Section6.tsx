import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { JobList } from './Section5'
import Image from 'next/image'
import { categoryTagStyles } from '@/shared/JobCard'
import pattern from "../../../public/home/sec6/Pattern.png"

function Section6() {
    return (
        <div className='bg-[#F8F8FD]'>
            <div className='container pt-8 relative overflow-x-hidden'>
                <div className='flex flex-row justify-between items-center py-2 md:py-4 lg:py-5 z-10'>
                    <h2 className='font-clash text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral z-10'>Latest <span className='text-secondary'>jobs open</span></h2>
                    <Link href="/jobs" className='text-sm md:text-base text-primary font-epilogue font-medium flex flex-row gap-x-3 items-center group z-10'>Show All Jobs <FaArrowRight className=' duration-200' /></Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 md:py-8 lg:py-10 z-20'>
                    {
                        JobList?.map(job => {
                            const {
                                logo,
                                title,
                                company,
                                location,
                                jobType,
                                categories,
                            } = job
                            return <div key={job?.id} className="bg-white relative z-10 flex flex-row items-center gap-x-5 px-6 py-4 duration-200">

                                {/* Logo */}
                                <div className="h-14 w-14 relative shrink-0">
                                    <Image src={logo} alt={company} fill className="object-contain rounded-full" />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col gap-y-1 flex-1">
                                    <h3 className="font-epilogue font-semibold text-base text-neutral">{title}</h3>
                                    <p className="font-epilogue text-sm text-neutral/80">
                                        {company} &nbsp;·&nbsp; {location}
                                    </p>

                                    {/* Tags row */}
                                    <div className="flex flex-row items-center gap-x-2 mt-1">
                                        {/* Job type pill — no border, soft bg */}
                                        <span className="font-epilogue font-medium text-xs text-teal-500 border border-teal-100 px-3 py-1 rounded-full">
                                            {jobType}
                                        </span>

                                        {/* Divider */}
                                        <span className="h-4 w-px bg-gray-200" />

                                        {/* Extra tags */}
                                        {categories.map((cat) => (
                                            <span
                                                key={cat}
                                                className={`font-epilogue text-xs font-medium px-3 py-1 rounded-full ${categoryTagStyles[cat]}`}
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

                <Image src={pattern} alt='Pattern' className='h-full w-auto absolute top-0 right-0 md:-right-10 lg:-right-20 z-0'/>

            </div>
        </div>

    )
}

export default Section6