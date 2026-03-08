import Image from "next/image"
import dashboard from "../../../public/home/sec4/Dashboard.png"
import Link from "next/link"

function Section4() {
    return (
        <div className="container py-8">
            <div className="bg-primary py-20 px-16 relative space-y-3 md:space-y-5 h-[500px] md:h-auto">
                <h4 className="font-clash font-semibold text-3xl md:text-5xl text-white max-w-sm">Start posting jobs today</h4>
                <p className="font-epilogue text-sm md:text-base text-gray-100 font-medium">Start posting jobs for only $10.</p>
                <div className="mt-8 md:mt-10">
                    <Link href={"/signup"} className='text-base cursor-pointer text-primary border-0 bg-white px-6 py-5 font-epilogue font-bold'>
                        Sign Up For Free
                    </Link>
                </div>

                {/* Top-left corner triangle */}
                <div className="absolute top-0 left-0 w-0 h-0 
                    border-t-[100px] border-t-white 
                    border-r-[100px] border-r-transparent">
                </div>

                {/* Bottom-right corner triangle */}
                <div className="absolute -bottom-10 right-0 w-0 h-0 
                    border-b-[100px] border-b-white 
                    border-l-[100px] border-l-transparent">
                </div>

                <Image src={dashboard} alt="dashboard image" className="absolute bottom-0 left-5 md:left-auto md:right-5 lg:left-auto lg:right-10 xl:right-16 h-56 md:h-60 lg:h-[330px] w-auto z-10" />
            </div>
        </div>
    )
}

export default Section4