import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from 'react-icons/md';

const demoJob = {
  job_type: "Full Time",
  category: "Software Development",
  salary: "৳50,000 - ৳70,000 / month",
  experience: "2-3 Years",
  gender: "Male/Female",
  education: "Bachelor's Degree in Computer Science",
  createdAt: "2026-03-05",
  dedline: "2026-03-30",

  description: `We are looking for a passionate Full Stack Developer to join our growing team.
You will work on building scalable web applications and collaborate with designers,
product managers, and backend engineers to deliver high-quality software solutions.`,

  responsibilities: `• Develop and maintain web applications using React / Next.js
• Integrate REST APIs with frontend systems
• Write clean, maintainable, and scalable code
• Collaborate with team members in code reviews
• Debug issues and improve application performance`,

  requirements: `• Bachelor's degree in Computer Science or related field
• 2+ years experience with React or Next.js
• Strong knowledge of JavaScript, TypeScript, HTML, and CSS
• Experience working with REST APIs
• Familiarity with Git version control`,

  workingHours: `Sunday - Thursday
9:00 AM - 6:00 PM`,

  benefits: `• Competitive salary package
• Two festival bonuses
• Friendly and collaborative work environment
• Opportunity for career growth
• Annual performance bonus`
};

function JobDetails() {

  const summeryRows = [
    { label: "Job Type", value: (job: any) => job?.job_type },
    { label: "Category", value: (job: any) => job?.category },
    { label: "Salary", value: (job: any) => job?.salary },
    { label: "Experience", value: (job: any) => job?.experience },
    { label: "Gender", value: (job: any) => job?.gender },
    { label: "Education", value: (job: any) => job?.education },
    { label: "Posted", value: (job: any) => job?.createdAt },
    { label: "Application End", value: (job: any) => job?.dedline },
  ];

  return (
    <div className='container'>
      {/* -----------header--------- */}
      <div className='p-10 bg-[#F8F8FD] my-10 rounded-2xl'>
        <div className='flex flex-col md:flex-row gap-5 justify-between items-center'>

          <div className='flex flex-col md:flex-row justify-center md:justify-start gap-8 items-center'>
            <Image src={"/home/sec5/company1.png"} alt='Company Logo' height={1000} width={1000} className='h-28 w-auto rounded-lg' />
            <div className='space-y-2 md:text-left text-center'>
              <h3 className='font-clash font-semibold text-2xl text-neutral'>Senior Software Developer</h3>
              <p className='text-primary text-lg font-epilogue font-medium'>Qtech Solution</p>
              <div className='flex flex-row gap-x-5 items-center'>
                <div className='flex flex-row gap-x-0.5 items-center text-neutral/80'>
                  <CiLocationOn />
                  <p className='font-epilogue'>New York, USA</p>
                </div>
                <div className='flex flex-row gap-x-0.5 items-center text-neutral/80'>
                  <MdOutlinePhone />
                  <p className='font-epilogue'>+8801892814892</p>
                </div>
              </div>
            </div>
          </div>

          <button className='cursor-pointer text-white border-0 hover:bg-primary/80 duration-150 bg-primary px-5 py-3 font-epilogue font-bold'>
            Apply Now
          </button>

        </div>
      </div>

      <div className='grid grid-cols-3 gap-5 pb-20'>
        <div className='col-span-2'>

          <div className='my-8'>
            <h3 className='text-2xl font-clash font-medium mb-3 text-neutral'>Description : </h3>
            <pre className='text-sm text-neutral/80 font-normal font-epilogue'>{demoJob?.description}</pre>
          </div>

          <div className='my-8'>
            <h3 className='text-2xl font-clash font-medium mb-3 text-neutral'>Responsibilities : </h3>
            <pre className='text-sm text-neutral/80 font-normal font-epilogue'>{demoJob?.responsibilities}</pre>
          </div>

          <div className='my-8'>
            <h3 className='text-2xl font-clash font-medium mb-3 text-neutral'>Requirements : </h3>
            <pre className='text-sm text-neutral/80 font-normal font-epilogue'>{demoJob?.requirements}</pre>
          </div>

          <div className='my-8'>
            <h3 className='text-2xl font-clash font-medium mb-3 text-neutral'>Working Hours : </h3>
            <pre className='text-sm text-neutral/80 font-normal font-epilogue'>{demoJob?.workingHours}</pre>
          </div>

          <div className='my-8'>
            <h3 className='text-2xl font-clash font-medium mb-3 text-neutral'>Benefits : </h3>
            <pre className='text-sm text-neutral/80 font-normal font-epilogue'>{demoJob?.benefits}</pre>
          </div>

          <button className='cursor-pointer text-white border-0 hover:bg-primary/80 duration-150 bg-primary px-5 py-3 font-epilogue font-bold'>
            Apply Now
          </button>

        </div>

        <section className="rounded-lg self-start bg-[#F8F8FD] p-8 inline">
          <table className="table-auto w-full">
            <tbody>
              {summeryRows.map((row, index) => (
                <tr
                  key={index}
                  className="py-3"
                >
                  <td className="text-sm font-medium text-neutral min-w-24 font-epilogue">
                    {row.label}
                  </td>
                  <td className="min-w-1 pr-4">
                    :
                  </td>

                  <td className="text-sm font-medium text-neutral/80 font-epilogue py-3">
                    {row.value(demoJob) ?? "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </div>
    </div>
  )
}

export default JobDetails