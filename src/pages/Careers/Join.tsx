import {useState} from 'react'

export default function join(){
    const [showAll, setShowAll] = useState(false);


    const cards = [
        {
            icon: (<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" fill="#1F1F1F"/>
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" stroke="#333333"/>
                    <path d="M27.9468 22.7118L37.2867 32.0518C37.9901 32.7552 39.1306 32.7552 39.834 32.0518C40.5374 31.3484 40.5374 30.2079 39.834 29.5045L38.5604 28.2309L40.2585 26.5327C42.1343 24.657 42.1343 21.6158 40.2585 19.7401C38.3828 17.8643 35.3416 17.8643 33.4659 19.7401L31.7677 21.4382L30.4941 20.1646C29.7907 19.4612 28.6502 19.4612 27.9468 20.1646C27.2434 20.868 27.2434 22.0084 27.9468 22.7118Z" fill="#CE7D63"/>
                    <path d="M27.983 25.2229L21.4924 31.7135C20.9604 32.2455 20.6944 32.5115 20.5255 32.8301C20.4129 33.0427 20.3329 33.2709 20.288 33.5072C20.2209 33.8615 20.2624 34.2354 20.3455 34.9831L20.4071 35.5377C20.4298 35.7417 20.4411 35.8437 20.444 35.9416C20.4612 36.5348 20.2583 37.1134 19.8742 37.5659C19.8108 37.6405 19.7382 37.7131 19.5931 37.8583L18.8596 38.5917C18.1562 39.2952 18.1562 40.4356 18.8596 41.139C19.563 41.8424 20.7034 41.8424 21.4068 41.139L22.1404 40.4055C22.2855 40.2603 22.3581 40.1878 22.4327 40.1244C22.8851 39.7403 23.4638 39.5373 24.057 39.5546C24.1549 39.5575 24.2569 39.5688 24.4609 39.5915L25.0154 39.6531C25.7632 39.7362 26.1371 39.7777 26.4914 39.7105C26.7277 39.6657 26.9559 39.5857 27.1684 39.473C27.4871 39.3042 27.7531 39.0382 28.2851 38.5062L29.9632 36.8279L27.8009 34.6655C27.4592 34.3238 27.4592 33.7698 27.8009 33.4281C28.1426 33.0864 28.6966 33.0864 29.0383 33.4281L31.2007 35.5905L32.2966 34.4945L30.1342 32.3322C29.7925 31.9905 29.7925 31.4365 30.1342 31.0947C30.4759 30.753 31.0299 30.753 31.3716 31.0947L33.5341 33.2572L34.7757 32.0156L27.983 25.2229Z" fill="#CE7D63"/>
                </svg>
            ),
            title: 'Web Designer',
            salary: '$45,000 - $60,000 per year',
            experience: '1+ year',
            deadline: '30/09/2025',
            skills: 'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.',

        },
        {
            icon: (<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" fill="#1F1F1F"/>
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" stroke="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0348 19.7001C20.668 21.0669 20.668 23.2668 20.668 27.6666V32.3333C20.668 36.733 20.668 38.9329 22.0348 40.2998C23.4016 41.6666 25.6015 41.6666 30.0013 41.6666C34.4011 41.6666 36.601 41.6666 37.9678 40.2998C39.3346 38.9329 39.3346 36.733 39.3346 32.3333V27.6666C39.3346 23.2668 39.3346 21.0669 37.9678 19.7001C36.601 18.3333 34.4011 18.3333 30.0013 18.3333C25.6015 18.3333 23.4016 18.3333 22.0348 19.7001ZM26.5013 20.9583C26.0181 20.9583 25.6263 21.35 25.6263 21.8333C25.6263 22.3165 26.0181 22.7083 26.5013 22.7083H33.5013C33.9846 22.7083 34.3763 22.3165 34.3763 21.8333C34.3763 21.35 33.9846 20.9583 33.5013 20.9583H26.5013ZM30.0013 38.1666C31.29 38.1666 32.3346 37.1219 32.3346 35.8333C32.3346 34.5446 31.29 33.4999 30.0013 33.4999C28.7126 33.4999 27.668 34.5446 27.668 35.8333C27.668 37.1219 28.7126 38.1666 30.0013 38.1666Z" fill="#CE7D63"/>
                </svg>
            ),
            title: 'Mobile App Developer',
            salary: '$55,000 - $75,000 per year',
            experience: '2+ years',
            deadline: '15/10/2025',
            skills: 'Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.',

        },
        {
            icon: (<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" fill="#1F1F1F"/>
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" stroke="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.0594 17.4583H29.938C28.8898 17.4582 28.0157 17.4582 27.3218 17.5515C26.5894 17.65 25.9281 17.8666 25.3967 18.398C24.8654 18.9293 24.6487 19.5906 24.5503 20.323C24.457 21.0169 24.457 21.891 24.457 22.9392V23.0299C22.099 23.1071 20.683 23.3826 19.6989 24.3668C18.332 25.7336 18.332 27.9335 18.332 32.3333C18.332 36.733 18.332 38.9329 19.6989 40.2998C21.0657 41.6666 23.2656 41.6666 27.6654 41.6666H32.332C36.7318 41.6666 38.9317 41.6666 40.2985 40.2998C41.6654 38.9329 41.6654 36.733 41.6654 32.3333C41.6654 27.9335 41.6654 25.7336 40.2985 24.3668C39.3144 23.3826 37.8984 23.1071 35.5404 23.0299V22.9393C35.5404 21.891 35.5404 21.0169 35.4471 20.323C35.3487 19.5906 35.1321 18.9293 34.6007 18.398C34.0693 17.8666 33.408 17.65 32.6756 17.5515C31.9817 17.4582 31.1076 17.4582 30.0594 17.4583ZM33.7904 23.0021V22.9999C33.7904 21.8752 33.7885 21.1198 33.7127 20.5562C33.6404 20.0178 33.5153 19.7874 33.3632 19.6354C33.2112 19.4834 32.9808 19.3583 32.4424 19.2859C31.8789 19.2101 31.1234 19.2083 29.9987 19.2083C28.874 19.2083 28.1185 19.2101 27.555 19.2859C27.0166 19.3583 26.7862 19.4834 26.6342 19.6354C26.4821 19.7874 26.357 20.0178 26.2847 20.5562C26.2089 21.1198 26.207 21.8752 26.207 22.9999V23.0021C26.6644 22.9999 27.1498 22.9999 27.6654 22.9999H32.332C32.8476 22.9999 33.333 22.9999 33.7904 23.0021ZM35.832 26.4999C35.832 27.1443 35.3097 27.6666 34.6654 27.6666C34.021 27.6666 33.4987 27.1443 33.4987 26.4999C33.4987 25.8556 34.021 25.3333 34.6654 25.3333C35.3097 25.3333 35.832 25.8556 35.832 26.4999ZM25.332 27.6666C25.9764 27.6666 26.4987 27.1443 26.4987 26.4999C26.4987 25.8556 25.9764 25.3333 25.332 25.3333C24.6877 25.3333 24.1654 25.8556 24.1654 26.4999C24.1654 27.1443 24.6877 27.6666 25.332 27.6666Z" fill="#CE7D63"/>
                </svg>
            ),
            title: 'Project Manager',
            salary: '$60,000 - $80,000 per year',
            experience: '5+ years',
            deadline: '05/12/2025',
            skills: 'Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.',

        },
        {
            icon: (<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" fill="#1F1F1F"/>
                    <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" stroke="#333333"/>
                    <path d="M18.332 23.5833C18.332 20.6838 20.6825 18.3333 23.582 18.3333C26.4815 18.3333 28.832 20.6838 28.832 23.5833V27.0833C28.832 27.4901 28.832 27.6935 28.7873 27.8605C28.6659 28.3134 28.3122 28.6672 27.8592 28.7885C27.6923 28.8333 27.4889 28.8333 27.082 28.8333H23.582C20.6825 28.8333 18.332 26.4827 18.332 23.5833Z" fill="#CE7D63"/>
                    <path d="M31.1654 32.9166C31.1654 32.5097 31.1654 32.3063 31.2101 32.1394C31.3315 31.6865 31.6852 31.3327 32.1382 31.2113C32.3051 31.1666 32.5085 31.1666 32.9154 31.1666H36.4154C39.3149 31.1666 41.6654 33.5171 41.6654 36.4166C41.6654 39.3161 39.3149 41.6666 36.4154 41.6666C33.5159 41.6666 31.1654 39.3161 31.1654 36.4166V32.9166Z" fill="#CE7D63"/>
                    <path d="M18.332 36.4166C18.332 33.5171 20.6825 31.1666 23.582 31.1666H26.732C27.4671 31.1666 27.8346 31.1666 28.1154 31.3096C28.3624 31.4355 28.5631 31.6363 28.689 31.8832C28.832 32.164 28.832 32.5315 28.832 33.2666V36.4166C28.832 39.3161 26.4815 41.6666 23.582 41.6666C20.6825 41.6666 18.332 39.3161 18.332 36.4166Z" fill="#CE7D63"/>
                    <path d="M31.1654 23.5833C31.1654 20.6838 33.5159 18.3333 36.4154 18.3333C39.3149 18.3333 41.6654 20.6838 41.6654 23.5833C41.6654 26.4827 39.3149 28.8333 36.4154 28.8333H32.6654C32.4912 28.8333 32.4042 28.8333 32.3309 28.825C31.7224 28.7564 31.2422 28.2762 31.1736 27.6677C31.1654 27.5945 31.1654 27.5074 31.1654 27.3333V23.5833Z" fill="#CE7D63"/>
                </svg>
            ),
            title: 'Digital Marketing Specialist',
            salary: '$50,000 - $65,000 per year',
            experience: '3+ years',
            deadline: '20/11/2025',
            skills: 'Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.',

        },

    ]


    return(
        <section className="h-full p-10 max-md:px-4 max-md:py-3 bg-[#0F0F0F]">

            <div className = "border-2 rounded-[20px] border-[#1F1F1F] p-2.5 flex flex-col gap-2.5">
                {/*Heading*/}
                <div className = "bg-[#191919] p-10 max-md:p-6 rounded-[14px] ">
                    <h2 className = "font-['Roboto_Flex'] font-semibold text-[38px] max-md:text-[28px] leading-[100%] tracking-[0%] uppercase text-[#F9EFEC]">Join Our Team at NexGen</h2>
                </div>


                {/*Cards*/}
                <div className = "grid grid-cols-2 max-md:grid-cols-1 gap-2.5">
                    {(showAll ? cards : cards.slice(0, 2)).map((item, index) => (
                        <div key={index} className = "flex flex-col gap-7.5 max-md:gap-6 p-10 max-md:p-6 bg-[#191919] rounded-xl">
                            {/*Icon +Title + View Details*/}
                            <div className="flex flex-row justify-between items-center">
                                <div className = "flex flex-row gap-2.5 items-center">
                                    <span>{item.icon}</span>
                                    <h2 className = "font-['Roboto_Flex'] font-medium text-2xl max-md:text-xl leading-[150%] tracking-[0%] uppercase text-[#F9EFEC]">{item.title}</h2>
                                </div>

                                <div className = "flex flex-row gap-2 items-center max-md:hidden">
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" fill="#1F1F1F"/>
                                        <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#333333"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.25 19.75L35.5 19.75C35.6989 19.75 35.8897 19.829 36.0303 19.9697C36.171 20.1103 36.25 20.3011 36.25 20.5V31.75C36.25 32.1642 35.9142 32.5 35.5 32.5C35.0858 32.5 34.75 32.1642 34.75 31.75V22.3107L21.0303 36.0303C20.7374 36.3232 20.2626 36.3232 19.9697 36.0303C19.6768 35.7374 19.6768 35.2626 19.9697 34.9697L33.6893 21.25L24.25 21.25C23.8358 21.25 23.5 20.9142 23.5 20.5C23.5 20.0858 23.8358 19.75 24.25 19.75Z" fill="#E7BEB1"/>
                                    </svg>

                                    <p className = "font-['Roboto_Mono'] font-medium text-base leading-[150%] tracking-[0%] uppercase text-[#B3B3B2]">View Details</p>
                                </div>
                            </div>

                            {/*Salary + Exp + Deadline*/}
                            <div className = "flex flex-wrap max-md:flex-col gap-2.5 max-md:gap-3">

                                <div className = "flex flex-row gap-1.5 items-center whitespace-nowrap bg-[#1F1F1F] rounded-[45px] px-4 py-2">
                                    <p className="font-['Roboto_Flex'] font-normal text-sm leading-[150%] tracking-[0%] text-[#B3B3B2]">Salary</p>

                                    <svg className="shrink-0" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#CE7D63"/>
                                    </svg>

                                    <p className = "font-['Roboto_Flex'] font-medium text-sm leading-[150%] tracking-[0%] text-[#E6E6E6]">{item.salary}</p>
                                </div>

                                <div className = "flex flex-row gap-1.5 items-center whitespace-nowrap bg-[#1F1F1F] rounded-[45px] px-4 py-2">
                                    <p className="font-['Roboto_Flex'] font-normal text-sm leading-[150%] tracking-[0%] text-[#B3B3B2]">Experience</p>

                                    <svg className="shrink-0" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#CE7D63"/>
                                    </svg>

                                    <p className = "font-['Roboto_Flex'] font-medium text-sm leading-[150%] tracking-[0%] text-[#E6E6E6]">{item.experience}</p>
                                </div>

                                <div className = "flex flex-row gap-1.5 items-center whitespace-nowrap bg-[#1F1F1F] rounded-[45px] px-4 py-2">
                                    <p className="font-['Roboto_Flex'] font-normal text-sm leading-[150%] tracking-[0%] text-[#B3B3B2]">Deadline</p>

                                    <svg className="shrink-0" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#CE7D63"/>
                                    </svg>

                                    <p className = "font-['Roboto_Flex'] font-medium text-sm leading-[150%] tracking-[0%] text-[#E6E6E6]">{item.deadline}</p>
                                </div>

                            </div>

                            {/*Skills*/}
                            <div className = "flex flex-col gap-2">
                                <h2 className = "font-['Roboto_Flex'] font-medium text-xl max-md:text-base leading-[150%] tracking-[0%] uppercase text-[#F9EFEC]">Skills</h2>
                                <p className = "font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#B3B3B2] max-w-146">{item.skills}</p>
                            </div>

                            <div className = "flex flex-row gap-2 items-center md:hidden">
                                <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" fill="#1F1F1F"/>
                                    <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#333333"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.25 19.75L35.5 19.75C35.6989 19.75 35.8897 19.829 36.0303 19.9697C36.171 20.1103 36.25 20.3011 36.25 20.5V31.75C36.25 32.1642 35.9142 32.5 35.5 32.5C35.0858 32.5 34.75 32.1642 34.75 31.75V22.3107L21.0303 36.0303C20.7374 36.3232 20.2626 36.3232 19.9697 36.0303C19.6768 35.7374 19.6768 35.2626 19.9697 34.9697L33.6893 21.25L24.25 21.25C23.8358 21.25 23.5 20.9142 23.5 20.5C23.5 20.0858 23.8358 19.75 24.25 19.75Z" fill="#E7BEB1"/>
                                </svg>

                                <p className = "font-['Roboto_Mono'] font-medium text-sm leading-[150%] tracking-[0%] uppercase text-[#B3B3B2]">View Details</p>
                            </div>

                            {/*Button*/}
                            <button className = "bg-[#CE7D63] py-3.5 rounded-lg">
                                <a href="#" className = "font-['Roboto_Flex'] font-medium text-sm leading-[150%] tracking-[0%] text-center uppercase text-[#0F0F0F]">Apply now</a>
                            </button>
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="max-md:block hidden md:block hidden bg-[#1F1F1F] rounded-[45px] px-6 py-3 text-[#E6E6E6]"
                    >

                        <a href="#" className = "font-['Roboto_Mono'] font-medium text-sm leading-[150%] tracking-[0%] uppercase text-[#B3B3B2]">View All</a>
                    </button>
                )}

            </div>

        </section>
    )
}