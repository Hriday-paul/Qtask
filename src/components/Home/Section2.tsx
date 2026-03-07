"use client"
import Image from "next/image"
import logo1 from "../../../public/home/sec2/logo1.png"
import logo2 from "../../../public/home/sec2/logo2.png"
import logo3 from "../../../public/home/sec2/logo3.png"
import logo4 from "../../../public/home/sec2/logo4.png"
import logo5 from "../../../public/home/sec2/logo5.png"
import Marquee from 'react-fast-marquee';

function Section2() {

    const logos = [
        {
            id: 1,
            img: logo1
        },
        {
            id: 2,
            img: logo2
        },
        {
            id: 3,
            img: logo3
        },
        {
            id: 4,
            img: logo4
        },
        {
            id: 5,
            img: logo5
        },
    ]

    return (
        <div className='bg-white'>
            <div className='container py-10'>
                <p className="text-base font-epilogue text-neutral/80 mb-5">Companies we helped grow</p>

                <Marquee direction='right' autoFill={true} loop={0} pauseOnHover={true}>
                    {logos?.map(logo => (
                        <Image
                            key={logo?.id}
                            src={logo?.img}
                            alt="logo"
                            className="h-8 w-auto mx-6"
                        />
                    ))}
                </Marquee>

            </div>
        </div>
    )
}

export default Section2