import JobCard from "@/shared/JobCard"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import FeatureJobCarousel from "./FeatureJobCarousel"
import { Job } from "../../../types/job"

async function Section5({ jobPromise }: { jobPromise: Promise<{ data: Job[] }> }) {

    const jobs = await jobPromise;

    return (
        <div className='container pt-4 md:pt-6 lg:pt-8'>
            <div className='flex flex-row justify-between items-center py-2 md:py-4 lg:py-5'>
                <h2 className='font-clash text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral'>Featured <span className='text-secondary'>jobs</span></h2>
                <Link href="/jobs" className='text-sm md:text-base text-primary font-epilogue font-medium flex flex-row gap-x-3 items-center group'>Show All Jobs <FaArrowRight className=' duration-200' /></Link>
            </div>
            <Jobs jobs={jobs?.data} />
            <div className="md:hidden">
                <FeatureJobCarousel jobs={jobs?.data} />
            </div>
        </div>
    )
}

export default Section5;


const Jobs = ({ jobs }: { jobs: Job[] }) => {
    return <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-5 py-5 md:py-8 lg:py-10">
        {
            jobs?.map(job => {
                return <JobCard job={job} key={job?.id} />
            })
        }
    </div>
}