import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import pattern from "../../../public/home/sec6/Pattern.png"
import { Job } from '../../../types/job'
import { getImageUrl } from '@/utils/imageUrl'
import { JOB_CATEGORY_STYLES } from '@/utils/config'
import { GetJobs } from '@/lib/services/Quary.Jobs'
import { Suspense } from 'react'
import LatestJobSkeleton from '../Jobs/LatestJobSkeleton'

async function Section6() {

    const newJobPromise = GetJobs({ query: {} });

    return (
        <div className='bg-[#F8F8FD]'>
            <div className='container pt-8 relative overflow-x-hidden'>
                <div className='flex flex-row justify-between items-center py-2 md:py-4 lg:py-5 z-10'>
                    <h2 className='font-clash text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral z-10'>Latest <span className='text-secondary'>jobs open</span></h2>
                    <Link href="/jobs" className='text-sm md:text-base text-primary font-epilogue font-medium flex flex-row gap-x-3 items-center group z-10'>Show All Jobs <FaArrowRight className=' duration-200' /></Link>
                </div>

                <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 md:py-8 lg:py-10 z-20">
                    <LatestJobSkeleton />
                    <LatestJobSkeleton />
                    <LatestJobSkeleton />
                    <LatestJobSkeleton />
                </div>}>
                    <LatestJobs jobPromise={newJobPromise} />
                </Suspense>

                <Image src={pattern} alt='Pattern' className='h-full w-auto absolute top-0 right-0 md:-right-10 lg:-right-20 z-0' />

            </div>
        </div>

    )
};

const LatestJobs = async ({ jobPromise }: { jobPromise: Promise<{ data: { data: Job[] } }> }) => {
    const jobs = await jobPromise;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 md:py-8 lg:py-10 z-20'>
            {
                jobs?.data?.data?.map(job => {

                    const {
                        id,
                        job_type,
                        title,
                        company,
                        category,
                        division
                    } = job;

                    const { label, className } = JOB_CATEGORY_STYLES[category];

                    return <Link href={`/jobs/${id}`} key={job?.id}>
                        <div className="bg-white relative z-10 flex flex-row items-center gap-x-5 px-6 py-4 duration-200">
                            {/* Logo */}
                            <div className="h-14 w-14 relative shrink-0">
                                <Image src={getImageUrl(company?.logo)} alt={"Company image"} fill className="object-contain rounded-full" />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-y-1 flex-1">
                                <h3 className="font-epilogue font-semibold text-base text-neutral">{title}</h3>
                                <p className="font-epilogue text-sm text-neutral/80">
                                    {company?.name} &nbsp;·&nbsp; {division}
                                </p>

                                {/* Tags row */}
                                <div className="flex flex-row items-center gap-x-2 mt-1">
                                    {/* Job type pill — no border, soft bg */}
                                    <span className="font-epilogue font-medium text-xs text-teal-500 border border-teal-100 px-3 py-1 rounded-full">
                                        {job_type}
                                    </span>

                                    {/* Divider */}
                                    <span className="h-4 w-px bg-gray-200" />

                                    {/* Extra tags */}
                                    <span className={`text-xs font-medium font-epilogue px-3 py-1 rounded-full ${className}`}>
                                        {label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default Section6