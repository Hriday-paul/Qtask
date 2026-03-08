import Image from "next/image"
import vectorImg from "../../../public/home/sec1/vector.png"
import manImg from "../../../public/home/sec1/man.png"

function Section1() {
    return (
        <div className="bg-[#F8F8FD] h-96 md:h-full lg:h-[80vh] xl:h-[82vh] flex items-center">
            <div className='container w-full'>
                <div className='flex flex-row items-center gap-5'>
                    <div className="max-w-sm space-y-3">
                        <h1 className='font-clash font-semibold text-5xl text-neutral '>Discover more than <span className='text-secondary'>5000+ Jobs</span></h1>
                        <Image src={vectorImg} alt="vector image" className="w-full h-auto" />
                        <p className="font-epilogue text-neutral/80 text-lg">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                    </div>
                    <div className='justify-center items-center bg-[url("/home/sec1/Pattern.png")] bg-no-repeat bg-cover bg-center w-full relative hidden md:flex'>
                        <Image src={manImg} alt="man image" className="h-[450px] w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1