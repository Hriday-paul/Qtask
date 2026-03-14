import Image from 'next/image';
import { Job } from '../../types/job';
import { getImageUrl } from '@/utils/imageUrl';
import { JOB_CATEGORY_STYLES } from '@/utils/config';
import Link from 'next/link';

function JobCard({ job }: { job: Job }) {

    const {
        id,
        job_type,
        title,
        company,
        description,
        category,
        division
    } = job;

    const { label, className } = JOB_CATEGORY_STYLES[category];

    return (
        <Link href={`/jobs/${id}`}>
            <div className="bg-white border border-neutral/20 p-6 space-y-4 hover:shadow-lg duration-200">

                {/* Top row: logo + job type */}
                <div className="flex justify-between items-start">
                    <div className="h-10 w-10 relative ">
                        <Image src={getImageUrl(company?.logo)} alt={"Company image"} fill className="object-contain rounded-full" />
                    </div>
                    <span className="text-sm font-normal text-primary border border-primary px-3 py-1 font-epilogue">
                        {job_type}
                    </span>
                </div>

                {/* Title + company + location */}
                <div className="space-y-1">
                    <h3 className="font-epilogue font-semibold text-lg text-gray-900">{title}</h3>
                    <p className="font-epilogue text-sm text-neutral/80">
                        {company?.name} &nbsp;·&nbsp; {division}
                    </p>
                </div>

                {/* Description */}
                <p className="font-epilogue text-sm text-neutral/80 leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Tags */}
                <span className={`text-xs font-medium font-epilogue px-3 py-1 rounded-full ${className}`}>
                    {label}
                </span>
                {/* <div className="flex flex-wrap gap-2">
                {categories.map((tag) => (
                    <span
                        key={tag}
                        className={`text-xs font-medium font-epilogue px-3 py-1 rounded-full ${categoryTagStyles[tag]}`}
                    >
                        {tag}
                    </span>
                ))}
            </div> */}
            </div>
        </Link>
    )
}

export default JobCard