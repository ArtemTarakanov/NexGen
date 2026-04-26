import {useState} from "react";
export default function Questions() {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const Data = [
        {
            questions:'How long does it take to complete a web development project?',
            ancer:'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
        },
        {
            questions:'Can you handle large-scale mobile app development projects?',
            ancer:'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
        },
        {
            questions:'Can you integrate third-party APIs into our mobile app?',
            ancer:'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
        },
        {
            questions:'How do you ensure cross-platform compatibility for mobile apps?',
            ancer:'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
        },
        {
            questions:'What is your approach to user experience (UX) design?',
            ancer:'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
        },

    ];

    const Accordion = (index:number) =>{
        setOpenIndex(openIndex === index ? null : index);
    }

    return(
        <section className="bg-[#0F0F0F] h-full flex flex-col items-center px-12 max-md:px-4 pt-8 max-md:py-2.5 gap-2.5 ">
            
            {/*Верхний блок*/}
            <div className="rounded-2xl w-full p-10 bg-[#191919] flex flex-row justify-between items-center max-md:p-6 text-[28px]">
                <h1 className="font-['Roboto_Flex'] font-semibold text-[#F9EFEC] text-[38px] uppercase  max-md:text-2xl">Frequently Asked Questions</h1>
                <button className=" max-md:hidden">
                    <svg className="transform transition duration-300 ease-in-out hover:scale-110" width="141" height="56" viewBox="0 0 141 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" fill="#1A1A1A"/>
                        <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#262626"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.25 19.75L35.5 19.75C35.6989 19.75 35.8897 19.829 36.0303 19.9697C36.171 20.1103 36.25 20.3011 36.25 20.5V31.75C36.25 32.1642 35.9142 32.5 35.5 32.5C35.0858 32.5 34.75 32.1642 34.75 31.75V22.3107L21.0303 36.0303C20.7374 36.3232 20.2626 36.3232 19.9697 36.0303C19.6768 35.7374 19.6768 35.2626 19.9697 34.9697L33.6893 21.25L24.25 21.25C23.8358 21.25 23.5 20.9142 23.5 20.5C23.5 20.0858 23.8358 19.75 24.25 19.75Z" fill="#E7BEB1"/>
                        <path d="M67.875 34L64.375 22.625H66.4297L68.5938 30.5L68.7812 31.1797L68.9766 30.4922L71.1562 22.625H73.2031L69.7031 34H67.875ZM75.0547 22.625H81.7578V24.1797H79.3281V32.4531H81.7578V34H75.0547V32.4531H77.4297V24.1797H75.0547V22.625ZM91.0703 28.8984H86.3672V32.4531H91.8594V34H84.4844V22.625H91.8203V24.1797H86.3672V27.3828H91.0703V28.8984ZM94.6719 34L93.1875 22.625H94.9297L95.7109 29.6094L95.7656 30.0547L95.8438 29.5859L96.9375 22.625H98.375L99.5078 29.6172L99.5859 30.0859L99.6406 29.6094L100.43 22.625H102.18L100.68 34H98.9062L97.75 27.0391L97.6719 26.5L97.5859 27.0391L96.4453 34H94.6719ZM118.734 31.3828H115.164L114.391 34H112.438L116.141 22.625H117.805L121.445 34H119.5L118.734 31.3828ZM115.641 29.7734H118.273L116.969 25.2734L115.641 29.7734ZM124.867 32.4531H130.297V34H122.984V22.625H124.867V32.4531ZM134.477 32.4531H139.906V34H132.594V22.625H134.477V32.4531Z" fill="#B3B3B2"/>
                    </svg>
                </button>
            </div>

            {/*Весь нижний блок*/}
            <div className="w-full grid grid-cols-2 gap-2.5 max-md:grid-cols-1">

                {/*Левый нижний блок*/}
                <div className="font-['Roboto_Flex'] flex flex-col gap-2.5">
                    {Data.map((item, index) => (
                        <div key={index} className="bg-[#191919] rounded-2xl px-6 py-5 ">
                            <button onClick={()=>Accordion(index)} className="w-full flex flex-row justify-between items-center gap-4">
                                <span className="font-normal text-[#F9EFEC] text-base text-left">{item.questions}</span>
                                <span className="shrink-0">
                                    {openIndex === index ? 
                                    (<svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#1F1F1F"/>
                                        <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#333333"/>
                                        <path d="M33 25H19C18.7348 25 18.4804 25.1054 18.2929 25.2929C18.1054 25.4804 18 25.7348 18 26C18 26.2652 18.1054 26.5196 18.2929 26.7071C18.4804 26.8946 18.7348 27 19 27H33C33.2652 27 33.5196 26.8946 33.7071 26.7071C33.8946 26.5196 34 26.2652 34 26C34 25.7348 33.8946 25.4804 33.7071 25.2929C33.5196 25.1054 33.2652 25 33 25Z" fill="#E7BEB1"/>
                                    </svg>) : 
                                    (<svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#1F1F1F"/>
                                        <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#333333"/>
                                        <path d="M33 25H27V19C27 18.7348 26.8946 18.4804 26.7071 18.2929C26.5196 18.1054 26.2652 18 26 18C25.7348 18 25.4804 18.1054 25.2929 18.2929C25.1054 18.4804 25 18.7348 25 19V25H19C18.7348 25 18.4804 25.1054 18.2929 25.2929C18.1054 25.4804 18 25.7348 18 26C18 26.2652 18.1054 26.5196 18.2929 26.7071C18.4804 26.8946 18.7348 27 19 27H25V33C25 33.2652 25.1054 33.5196 25.2929 33.7071C25.4804 33.8946 25.7348 34 26 34C26.2652 34 26.5196 33.8946 26.7071 33.7071C26.8946 33.5196 27 33.2652 27 33V27H33C33.2652 27 33.5196 26.8946 33.7071 26.7071C33.8946 26.5196 34 26.2652 34 26C34 25.7348 33.8946 25.4804 33.7071 25.2929C33.5196 25.1054 33.2652 25 33 25Z" fill="#E7BEB1"/>
                                    </svg>)
                                    }
                                </span>
                            </button>

                            

                            {/*Блок с ответом*/}
                            <div className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <hr className="border-[#333333] border-[1px] mt-3 mb-3 mr-30" />
                                <div className="text-[#B3B3B2] text-base max-w-[90%] my-3 ">{item.ancer}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/*Правый нижний блок*/}
                <div className="bg-[#191919] rounded-2xl">
                    <div className="p-8">
                        <h1 className="text-base font-medium text-[#F9EFEC] uppercase">Ask your question</h1>

                        <hr className="border-[#262626] border my-6" />

                        <form className="space-y-3">
                            {/*Name*/}
                            <div>
                                <label className="block text-[#F9EFEC] text-sm uppercase mb-2">name</label>
                                <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-[#0D0D0D] text-[#F9EFEC] placeholder-[#666] rounded-lg p-3 outline-none focus:outline-none focus:ring-2 focus:ring-[#E8927C] transition-all"
                                />
                            </div>

                            {/*Email*/}
                            <div>
                                <label className="block text-[#F9EFEC] text-sm uppercase mb-2">Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#0D0D0D] text-[#F9EFEC] placeholder-[#666] rounded-lg p-3 outline-none focus:outline-none focus:ring-2 focus:ring-[#E8927C] transition-all"
                                />
                            </div>

                            {/*Questions*/}
                            <div>
                                <label className="block text-[#F9EFEC] text-sm uppercase mb-2">Your Question</label>
                                <textarea
                                    placeholder="Enter Your Question Here ....."
                                    rows={4}
                                    className="w-full bg-[#0D0D0D] text-[#F9EFEC] placeholder-[#666] rounded-lg p-3 outline-none focus:outline-none focus:ring-2 focus:ring-[#E8927C] transition-all resize-none"
                                />
                            </div>

                        </form>

                        <button className="w-full bg-[#CE7D63] rounded-lg text-[#0F0F0F] text-sm uppercase py-3.5 mt-6 transform transition duration-300 ease-in-out hover:scale-103">Send Your Message</button>

                    </div>
                </div>

            </div>

            {/*Orange section*/}
            <div className="bg-[#CE7D63] font-['Roboto_Flex'] rounded-2xl p-10 max-md:p-5 flex flex-row items-center justify-between mt-4 max-md:w-full max-md:flex-col max-md:">
                <div className="text-[#0F0F0F] max-md:flex max-md:flex-col max-md:w-full max-md:">
                    <h1 className="text-[38px] font-medium uppercase max-md:text-[28px] ">Ready to Transform Your Digital Presence?</h1>
                    <p className="text-base font-normal mr-10 max-md:text-[14px]">Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
                </div>

                <button className=" bg-[#0F0F0F] rounded-xl py-2.5 px-6 max-md:py-4 transform transition duration-300 ease-in-out hover:scale-110 max-md:mt-4 max-md:w-full">
                    <div className="flex flex-row items-center justify-between gap-2 max-md:flex max-md:flex-row max-md:justify-center">
                        <p className="text-base text-[#F3DFD8] uppercase whitespace-nowrap max-md:text-sm ">Get in Touch</p>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5625 3.4375L17.875 3.4375C18.0573 3.4375 18.2322 3.50993 18.3611 3.63886C18.4901 3.7678 18.5625 3.94266 18.5625 4.125V14.4375C18.5625 14.8172 18.2547 15.125 17.875 15.125C17.4953 15.125 17.1875 14.8172 17.1875 14.4375V5.78477L4.61114 18.3611C4.34265 18.6296 3.90735 18.6296 3.63886 18.3611C3.37038 18.0926 3.37038 17.6574 3.63886 17.3889L16.2152 4.8125L7.5625 4.8125C7.1828 4.8125 6.875 4.5047 6.875 4.125C6.875 3.7453 7.1828 3.4375 7.5625 3.4375Z" fill="#E7BEB1"/>
                        </svg>
                    </div>
                </button>
            </div>


        </section>
    )
}