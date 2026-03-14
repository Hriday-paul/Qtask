import JobFilter from '@/components/Jobs/JobFilter'
import PageTop from '@/shared/PageTop'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { Suspense } from 'react'
import Searchbar from '@/components/Jobs/SearchBar'
import { GetJobs } from '@/lib/services/Quary.Jobs'
import Jobs from '@/components/Jobs/Jobs'
import LoadingJobCard from '@/components/Jobs/LoadingJobCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Browse All Jobs",
  description: "Browse thousands of job listings in Bangladesh on QuickHire. Find full-time, part-time, remote, and freelance jobs across all industries. Apply instantly and land your dream job today!",
  metadataBase: new URL('https://qtask-two.vercel.app'),
  
  openGraph: {
    title: 'Browse All Jobs in Bangladesh | QuickHire',
    description: 'Browse thousands of job listings in Bangladesh on QuickHire. Find full-time, part-time, remote, and freelance jobs across all industries. Apply instantly!',
    url: '/jobs',
    siteName: 'QuickHire',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    title: 'Browse All Jobs in Bangladesh | QuickHire',
    description: 'Browse thousands of job listings in Bangladesh on QuickHire. Find full-time, part-time, remote, and freelance jobs across all industries. Apply instantly!',
    card: 'summary_large_image',
    creator: '@quickhire',
    images: ['/og-image.png'],
  },
}

async function JobsPage({
  searchParams: ssp,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {

  const { limit, sort, page, searchTerm, division, jobType, employmentType, education, category } = await ssp;

  let sortBy = "createdAt";
  let orderBy = "desc"

  if (sort == "-createdAt") {
    orderBy = "asc"
  }

  const query: any = { page, sortBy, sortOrder: orderBy, limit: 21 }


  if (division) {
    query.division = division
  }

  if (jobType) {
    query.job_type = jobType
  }
  if (employmentType) {
    query.employment_type = employmentType
  }
  if (education) {
    query.education = education
  }
  if (searchTerm) {
    query.searchTerm = searchTerm
  }
  if (category) {
    query.category = category
  }
  if (limit) {
    query.limit = limit
  }

  const jobsPromise = GetJobs({ query });

  return (
    <div className=''>
      <PageTop title='Job List'>
        <h3 className="text-xs md:text-sm font-clash text-gray-100 flex flex-row gap-x-1.5 justify-center items-center">
          <Link href='/' className='font-epilogue'>Home</Link> <IoIosArrowForward className='' /> <p className='font-epilogue'>Jobs</p>
        </h3>
      </PageTop>

      <div className='bg-[#F2F4F8] py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-4 gap-5 container py-5'>
          <div className='lg:col-span-2 xl:col-span-1 hidden lg:block'>
            <JobFilter />
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-3'>
            <div>
              <Searchbar />

              <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <LoadingJobCard />
                <LoadingJobCard />
                <LoadingJobCard />
                <LoadingJobCard />
              </div>}>
                <Jobs adsPromise={jobsPromise} limit={limit} page={Number(page)} sort={sort} />
              </Suspense>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JobsPage