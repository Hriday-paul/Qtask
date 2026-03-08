import { JobCardProps } from '@/components/Home/Section5'
import Image from 'next/image';


export const categoryTagStyles: Record<string, string> = {
    Design: "bg-teal-500/10 text-teal-500",
    Sales: "bg-teal-100 text-teal-600",
    Marketing: "bg-orange-100 text-orange-500",
    Finance: "bg-purple-100 text-purple-500",
    Technology: "bg-red-500/10 text-red-500",
    Engineering: "bg-blue-100 text-blue-500",
    Business: "bg-primary/10 text-primary",
    "Human Resource": "bg-teal-100 text-teal-600",
};

function JobCard({ job }: { job: JobCardProps }) {

    const { logo,
        jobType,
        title,
        company,
        location,
        description, categories } = job;

    return (
        <div className="bg-white border border-neutral/20 p-6 space-y-4 hover:shadow-lg duration-200 cursor-pointer">

            {/* Top row: logo + job type */}
            <div className="flex justify-between items-start">
                <div className="h-10 w-10 relative ">
                    <Image src={logo} alt={company} fill className="object-contain rounded-full" />
                </div>
                <span className="text-sm font-normal text-primary border border-primary px-3 py-1 font-epilogue">
                    {jobType}
                </span>
            </div>

            {/* Title + company + location */}
            <div className="space-y-1">
                <h3 className="font-epilogue font-semibold text-lg text-gray-900">{title}</h3>
                <p className="font-epilogue text-sm text-neutral/80">
                    {company} &nbsp;·&nbsp; {location}
                </p>
            </div>

            {/* Description */}
            <p className="font-epilogue text-sm text-neutral/80 leading-relaxed line-clamp-2">
                {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {categories.map((tag) => (
                    <span
                        key={tag}
                        className={`text-xs font-medium font-epilogue px-3 py-1 rounded-full ${categoryTagStyles[tag]}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default JobCard