import {useState} from 'react'
export default function Apply() {

    const [isOpen, setIsOpen ] = useState<boolean>(false)

    const cards = [
        {
            step: '01',
            title: 'Explore Job Listings',
            description: 'Visit our website\'s "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.',
        },
        {
            step: '02',
            title: 'Review Job Description',
            description: 'Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.',
        },
        {
            step: '03',
            title: 'Prepare Your Application',
            description: 'Before applying, ensure you have the following ready',
        },
        {
            step: '04',
            title: 'Complete the Application',
            description: 'Click the "Apply Now" button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for. ',
        },
        {
            step: '05',
            title: 'Upload Your Documents',
            description: 'Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form.',
        },
        {
            step: '06',
            title: 'Submit Your Application',
            description: 'Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the "Submit" button to send it to our HR team.',
        },
        {
            step: '07',
            title: 'Application Review',
            description: 'After the application deadline, our HR team will carefully review all applications. Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments.',
        },
        {
            step: '08',
            title: 'Interview Process',
            description: 'If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location.',
        },


    ]

    return(
        <section className = "h-full p-10 max-md:px-4 max-md:py-3 bg-[#0F0F0F]">
            {/*main*/}
            <div className = "border-2 rounded-[20px] border-[#1F1F1F] p-2.5 flex flex-col gap-2.5">
                {/*Heading*/}
                <div className = "bg-[#191919] p-10 max-md:p-6 rounded-[14px] ">
                    <h2 className = "font-['Roboto_Flex'] font-semibold text-[38px] max-md:text-[28px] leading-[100%] tracking-[0%] uppercase text-[#F9EFEC]">How to Apply</h2>
                </div>

                {/*cards*/}
                <div className = "grid grid-cols-4 max-md:grid-cols-1 gap-2.5">
                    {(isOpen?cards:cards.slice(0, 4)).map((item, index) => (
                        <div key = {index} className ="bg-[#191919] pb-6 flex flex-col rounded-xl" >
                            <p className = "py-3 max-md:py-2.5 px-6 max-md:px-5 font-['Roboto_Mono'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#81807E]">Step {item.step}</p>

                            <div className = "flex flex-col gap-6 max-md:gap-5 flex-1">
                                <div className = "bg-[#1F1F1F] px-6 max-md:px-5 py-7.5 max-md:py-6 w-full">
                                    <h3 className = "font-['Roboto_Flex'] font-medium text-xl max-md:text-lg leading-[150%] tracking-[0%] uppercase text-[#F9EFEC]">{item.title}</h3>
                                </div>

                                <p className = "px-6 max-md:px-5 font-['Roboto_Flex'] font-normal text-base max-md:text-base leading-[150%] tracking-[0%] text-[#B3B3B2] пше ">{item.description}</p>

                                <span className = "px-6 flex flex-row items-center gap-2 mt-auto">

                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#1F1F1F"/>
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#333333"/>
                                    <path d="M26.25 21.25L20 27.5M20 27.5L13.75 21.25M20 27.5L20 12.5" stroke="#E7BEB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <p className = "font-['Roboto_Mono'] font-medium text-base leading-[150%] tracking-[0%] uppercase text-[#B3B3B2]">Know More</p>

                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="max-md:block hidden md:block hidden bg-[#1F1F1F] rounded-[45px] px-6 py-3 text-[#E6E6E6]"
                    >

                        <a href="#" className = "font-['Roboto_Mono'] font-medium text-sm leading-[150%] tracking-[0%] uppercase text-[#B3B3B2]">View All</a>
                    </button>
                )}
            </div>
        </section>
    )
}