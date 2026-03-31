import { motion } from "framer-motion";
import {useState} from "react";
export default function FAQ(){
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const items = [
        {id: 1, title: 'How long does it take to complete a web development project?', content: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'},
        {id: 2, title: 'Can you handle large-scale mobile app development projects?', content: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'},
        {id: 3, title: 'Can you integrate third-party APIs into our mobile app?', content: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'},
        {id: 4, title: 'How do you ensure cross-platform compatibility for mobile apps?', content: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'},
        {id: 5, title: 'What is your approach to user experience (UX) design?', content: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'},
    ]

    const toggleOpen = (index:number) => {
        setIsOpen(isOpen === index? null : index);
    }

    return(
        <section className = "h-full bg-[#0F0F0F] flex items-center justify-center p-10 max-md:px-4 max-md:py-3 ">

            {/*Main*/}
            <div className = "flex flex-col items-center gap-2.5 w-full">
                {/*Heading*/}
                <div className = "bg-[#191919] p-10 max-md:p-6 w-full rounded-2xl flex justify-center items-center">
                    <h2 className = "font-semibold text-[38px] max-md:text-[28px] leading-[100%] tracking-[0%] uppercase text-[#F9EFEC]" >Frequently Asked Questions</h2>
                </div>

                <div className="flex flex-row max-md:flex-col items-center w-full gap-4">
                    <div className="flex flex-col gap-2.5 w-6/10 max-md:w-full">

                        {items.map((item, index) => (
                            <div key={index} className="bg-[#191919] p-10 max-md:px-7.5 max-md:py-6 rounded-2xl flex flex-col relative overflow-hidden">

                                {/*Шапка*/}
                                <div className="flex flex-row items-center justify-between mb-">

                                    {/*Heading*/}
                                    <h2 className="font-['Roboto_Flex'] font-medium text-xl max-md:text-lg leading-[100%] tracking-[0%] text-[#F9EFEC]">
                                        {item.title}
                                    </h2>

                                    {/*Button*/}
                                    <button onClick={() => toggleOpen(index)}>
                                        <svg
                                            className={`transition-transform duration-300 ${isOpen === index ? 'rotate-180' : ''}`}
                                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white"
                                            viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                                        </svg>
                                    </button>
                                </div>

                                {/*Description*/}
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={isOpen === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-2 mt-4 border-t border-[#333]">
                                        <p className="font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#B3B3B2]">
                                            {item.content}
                                        </p>
                                    </div>
                                </motion.div>

                            </div>
                        ))}
                    </div>

                    {/*Form*/}
                    <div className = "bg-[#191919] p-12.5 max-md:p-7.5 flex flex-col gap-7.5 max-md:gap-5 w-4/10 max-md:w-full rounded-2xl">

                        <h2 className = "font-['Roboto_Flex'] font-medium text-xl leading-[150%] tracking-[0%] uppercase text-[#F9EFEC]">Ask your question</h2>

                        <span className = "w-full h-[1px] bg-[#262626]"></span>

                        <div className = "flex flex-col gap-4">

                            <div>
                                <form>
                                    <div className = "flex flex-col gap-2">
                                        <label htmlFor="name" className = "font-['Roboto_Flex'] font-medium text-base leading-6 tracking-[0%] uppercase text-[#F3DFD8]">NAME</label>
                                        <input
                                            className = "font-['Roboto_Flex'] font-normal text-base leading-[150%] tracking-[0%] text-[#676665] bg-[#0F0F0F] rounded-lg p-5"
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </form>
                            </div>

                            <div>
                                <form>
                                    <div className = "flex flex-col gap-2">
                                        <label htmlFor="name" className = "font-['Roboto_Flex'] font-medium text-base leading-6 tracking-[0%] uppercase text-[#F3DFD8]">Email</label>
                                        <input
                                            className = "font-['Roboto_Flex'] font-normal text-base leading-[150%] tracking-[0%] text-[#676665] bg-[#0F0F0F] rounded-lg p-5"
                                            type="text"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </form>
                            </div>

                            <div>
                                <form>
                                    <div className = "flex flex-col gap-2">
                                        <label htmlFor="name" className = "font-['Roboto_Flex'] font-medium text-base leading-6 tracking-[0%] uppercase text-[#F3DFD8]">Your Question</label>
                                        <input
                                            className = "font-['Roboto_Flex'] font-normal text-base leading-[150%] tracking-[0%] text-[#676665] bg-[#0F0F0F] rounded-lg pl-5 pt-5 pb-8"
                                            type="text"
                                            placeholder="Enter Your Question Here ....."
                                        />
                                    </div>
                                </form>
                            </div>

                        </div>

                        <button className = "bg-[#CE7D63] py-3.5 rounded-lg ">
                            <a href="#"
                               className = "font-['Roboto_Flex'] font-medium text-sm leading-[150%] tracking-[0%] uppercase text-[#0F0F0F]"
                            >Send Your Message</a>
                        </button>
                        
                    </div>

                </div>

            </div>

        </section>
    )
}