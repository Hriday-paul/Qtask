import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { GetCategories } from '@/lib/services/Quary.Jobs'
import { JOB_CATEGORY_STYLES, JobCategory } from '@/utils/config'

function Section3() {

    const categoryPromise = GetCategories();

    return (
        <div className='container pt-4 md:pt-6 lg:pt-8'>
            <div className='flex flex-row justify-between items-center py-2 md:py-4 lg:py-5'>
                <h2 className='font-clash text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral'>Explore by <span className='text-secondary'>category</span></h2>
                <Link href="/jobs" className='text-sm md:text-base text-primary font-epilogue font-medium flex flex-row gap-x-3 items-center group'>Show All Jobs <FaArrowRight className=' duration-200' /></Link>
            </div>
            <Categories catsPromise={categoryPromise} />
        </div>
    )
}

export default Section3;

const Categories = async ({ catsPromise }: { catsPromise: Promise<{ data: { count: number, category: JobCategory }[] }> }) => {

    const categories = await catsPromise;

    return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 md:py-8 lg:py-10'>
        {
            categories?.data?.map(category => {

                const { label, icon } = JOB_CATEGORY_STYLES[category?.category];

                return <Link key={category?.category} href={`/jobs?category=${category?.category}`}>
                    <div className='border border-neutral/20 p-5 md:p-8 space-y-2 md:space-y-3 hover:bg-primary duration-200 group'>
                        <Image src={icon} height={500} width={500} alt='icon' className='h-10 md:h-12 w-auto mb-3 md:mb-8 group-hover:brightness-0 group-hover:invert' />
                        <h6 className='font-clash font-semibold text-lg md:text-xl text-neutral group-hover:text-white'>{label}</h6>
                        <p className='font-epilogue text-neutral/80 group-hover:text-gray-200 text-sm md:text-base flex flex-row gap-x-2 items-center'>{category?.count} Jobs Avaiable</p>
                    </div>
                </Link>
            })
        }
    </div>
}