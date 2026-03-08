import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import Image from "next/image";
import { IMeta } from "../../../types/job";
import { JobCardProps } from "../Home/Section5";
import SearchParamsPagination from "./SearchParamsPagination";
import SmFilter from "./SmFilter";
import JobFilter from "./JobFilter";
import SortBar from "./Sortbar";
import JobCard from "@/shared/JobCard";


async function Jobs({ adsPromise, page, limit, sort }: { adsPromise: Promise<{ data: { data: JobCardProps[], meta: IMeta } }>, page: number, limit?: string, sort?: string }) {

    const data = await adsPromise;

    return (
        <div>

            <div className="flex flex-row justify-between items-center py-2.5">
                <div className='lg:hidden'>
                    <SmFilter filterComponent={<JobFilter />} />
                </div>
                <p className="text-gray-500 text-sm font-popin font-medium flex flex-row gap-x-1.5 items-center">
                    <PiSlidersHorizontalDuotone className="text-xl" />
                    {data?.data?.meta?.total } Job Found
                </p>
                <SortBar limit={limit} sort={sort} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {data?.data?.data?.map(job => {
                    return <JobCard key={job?.id} job={job} />
                })}
            </div>

            {
                data?.data?.meta?.total <= 0 && <section className='min-h-[calc(25vh)] flex flex-col items-center justify-center'>
                    <Image src={"/empty_data.jpg"} height={1000} width={1000} className='h-28 w-auto mx-auto' alt='empty data' />
                    <h5 className='text-base font-figtree text-center'>{"Job Not found"}</h5>
                </section>
            }

            {data?.data?.meta?.total > 0 && <div className="mt-3">
                <SearchParamsPagination totalData={data?.data?.meta?.totalPage || 1} activePage={Number(page) || 1} />
            </div>}

        </div>
    )
}

export default Jobs