import JobDetails from "@/components/Jobs/JobDetails"
import PageTop from "@/shared/PageTop"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

function JobDetailsPage() {
    return (
        <div>
            <PageTop title='Job Details'>
                <h3 className="text-xs md:text-sm font-clash text-gray-100 flex flex-row gap-x-1.5 justify-center items-center">
                    <Link href='/' className='font-epilogue'>Home</Link> <IoIosArrowForward className='' /> <Link href='/jobs' className='font-epilogue'>Jobs</Link> <IoIosArrowForward className='' /> <p className='font-epilogue'>Jobs Details</p>
                </h3>
            </PageTop>
            <JobDetails />
        </div>
    )
}

export default JobDetailsPage