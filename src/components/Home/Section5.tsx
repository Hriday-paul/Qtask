import JobCard from "@/shared/JobCard"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import FeatureJobCarousel from "./FeatureJobCarousel"

export type JobCardProps = {
    id: number,
    logo: string
    jobType: string
    title: string
    company: string
    location: string
    description: string
    categories: string[]
}

export const JobList: JobCardProps[] = [
    {
        id: 1,
        title: "Email Marketing",
        company: "Revolut",
        location: "Madrid, Spain",
        description: "Revolut is looking for Email Marketing to help team manage. Product Designer to help us...",
        jobType: "Full Time",
        logo: "/home/sec5/company1.png",
        categories: ["Marketing", "Design"]
    },
    {
        id: 2,
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Fransisco, US",
        description: "Dropbox is looking for Brand Designer to help the team. Product Designer to help us...",
        jobType: "Full Time",
        logo: "/home/sec5/company2.png",
        categories: ["Design", "Business"]
    },
    {
        id: 3,
        title: "Email Marketing",
        company: "Pitch",
        location: "Berlin, Germany",
        description: "Pitch is looking for Customer Manager to join marketing team and manage campaigns...",
        jobType: "Full Time",
        logo: "/home/sec5/company3.png",
        categories: ["Marketing"]
    },
    {
        id: 4,
        title: "Visual Designer",
        company: "Blinklist",
        location: "Granada, Spain",
        description: "Blinklist is looking for Visual Designer to help the design team build creative assets...",
        jobType: "Full Time",
        logo: "/home/sec5/company4.png",
        categories: ["Design"]
    },
    {
        id: 5,
        title: "Product Designer",
        company: "ClassPass",
        location: "Manchester, UK",
        description: "ClassPass is looking for Product Designer to help us improve our product experience...",
        jobType: "Full Time",
        logo: "/home/sec5/company5.png",
        categories: ["Marketing", "Design"]
    },
    {
        id: 6,
        title: "Lead Designer",
        company: "Canva",
        location: "Ontario, Canada",
        description: "Canva is looking for Lead Designer to help develop new creative design systems...",
        jobType: "Full Time",
        logo: "/home/sec5/company6.png",
        categories: ["Design", "Business"]
    },
    {
        id: 7,
        title: "Brand Strategist",
        company: "GoDaddy",
        location: "Marseille, France",
        description: "GoDaddy is looking for Brand Strategist to join the team and improve marketing strategy...",
        jobType: "Full Time",
        logo: "/home/sec5/company7.png",
        categories: ["Marketing"]
    },
    {
        id: 8,
        title: "Data Analyst",
        company: "Twitter",
        location: "San Diego, US",
        description: "Twitter is looking for Data Analyst to help team analyze user data and trends...",
        jobType: "Full Time",
        logo: "/home/sec5/company8.png",
        categories: ["Technology"]
    }
];

function Section5() {
    return (
        <div className='container pt-4 md:pt-6 lg:pt-8'>
            <div className='flex flex-row justify-between items-center py-2 md:py-4 lg:py-5'>
                <h2 className='font-clash text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral'>Featured <span className='text-secondary'>jobs</span></h2>
                <Link href="/jobs" className='text-sm md:text-base text-primary font-epilogue font-medium flex flex-row gap-x-3 items-center group'>Show All Jobs <FaArrowRight className=' duration-200' /></Link>
            </div>
            <Jobs />
            <div className="md:hidden">
                <FeatureJobCarousel jobs={JobList} />
            </div>
        </div>
    )
}

export default Section5;


const Jobs = () => {
    return <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-5 py-5 md:py-8 lg:py-10">
        {
            JobList?.map(job => {
                return <JobCard job={job} key={job?.id} />
            })
        }
    </div>
}