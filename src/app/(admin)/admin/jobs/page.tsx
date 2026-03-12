import JobsTable from "@/components/Admin/Jobs/JobsTable";
import PostJob from "@/components/Admin/Jobs/PostJob";
import { GetJobs } from "@/lib/services/Quary.Jobs";
import { Suspense } from "react";
import { ImSpinner8 } from "react-icons/im";

async function JobsPage({
  searchParams: ssp,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {

  const searchParams = await ssp;

  const limit = searchParams?.limit;
  const page = searchParams?.page;
  const searchTerm = searchParams?.searchTerm

  const query: any = { page: page ?? 1, limit }
  if (searchTerm) {
    query.searchTerm = searchTerm
  }

  const jobPromise = GetJobs({ query });

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center gap-x-5 mb-5">
        <h3 className="font-medium font-epilogue text-xl">All Jobs</h3>
        <PostJob />
      </div>
      <div>
        <Suspense fallback={<div>
          <div className='min-h-40 flex items-center justify-center'>
            <ImSpinner8 className="text-4xl text-primary animate-spin" />
          </div>
        </div>}>
          <JobsTable jobPromise={jobPromise} page={Number(page)} />
        </Suspense>
      </div>
    </div>
  )
}

export default JobsPage