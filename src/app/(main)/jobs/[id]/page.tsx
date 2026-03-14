import DetailSkeleton from "@/components/Jobs/DetailSkeleton";
import JobDetails from "@/components/Jobs/JobDetails"
import GetJobDetails from "@/lib/services/JobDetails";
import PageTop from "@/shared/PageTop"
import { TextTruncate } from "@/utils/TextTruncate";
import Link from "next/link"
import { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io"
import { Job } from "../../../../../types/job";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await GetJobDetails({ id }) as { data: Job };

  return {
    title: `${data?.title} at ${data?.company?.name}`,
    description: TextTruncate(data?.description, 155),
    metadataBase: new URL('https://quickhire.com'),
    
    openGraph: {
      title: TextTruncate(`${data?.title} at ${data?.company?.name}`, 60),
      description: TextTruncate(data?.description, 155),
      url: `/jobs/${data?.id}`,
      siteName: 'QuickHire',
      type: 'website',
      creator: "QuickHire",
      publisher: "QuickHire"
    },
    twitter: {
      title: TextTruncate(`${data?.title} at ${data?.company?.name}`, 60),
      description: TextTruncate(data?.description, 155),
      card: 'summary_large_image',
      creator: '@quickhire',
    },
  }
}

async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const jobPromise = GetJobDetails({ id });

    return (
        <div>
            <PageTop title='Job Details'>
                <h3 className="text-xs md:text-sm font-clash text-gray-100 flex flex-row gap-x-1.5 justify-center items-center">
                    <Link href='/' className='font-epilogue'>Home</Link> <IoIosArrowForward className='' /> <Link href='/jobs' className='font-epilogue'>Jobs</Link> <IoIosArrowForward className='' /> <p className='font-epilogue'>Jobs Details</p>
                </h3>
            </PageTop>

            <Suspense fallback={<DetailSkeleton />}>
                <JobDetails jobPromise={jobPromise} />
            </Suspense>
        </div>
    )
}

export default JobDetailsPage