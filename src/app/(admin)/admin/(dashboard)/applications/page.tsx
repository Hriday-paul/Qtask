import ApplicationTable from '@/components/Admin/Applications/ApplicationTable';
import { GetApplications } from '@/lib/services/Quary.Jobs';
import React, { Suspense } from 'react'
import { ImSpinner8 } from 'react-icons/im';

async function ApplicationPage({
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

  const applicationPromise = GetApplications({ query });

  return (
    <div className="">

      <h3 className="font-medium font-epilogue text-xl">All Applications</h3>

      <div>
        <Suspense fallback={<div>
          <div className='min-h-40 flex items-center justify-center'>
            <ImSpinner8 className="text-4xl text-primary animate-spin" />
          </div>
        </div>}>
          <ApplicationTable applicationPromise={applicationPromise} page={Number(page)} />
        </Suspense>
      </div>
    </div>
  )
}

export default ApplicationPage