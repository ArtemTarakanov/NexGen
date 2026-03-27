export default function Reasons(){

    const cards = [
        {
            title: 'Expertise in Cutting-Edge Technologies',
            description: 'NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing...',
            learn: 'Learn More'
        },
        {
            title: 'Proven Track Record of Success',
            description: 'NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable...',
            learn: 'Learn More'
        },
        {
            title: 'Client-Centric Approach',
            description: 'At NexGen, we prioritize understanding our clients\' unique requirements, fostering ...',
            learn: 'Learn More'
        },
        {
            title: 'Dedicated Team of Professionals',
            description: 'Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable...',
            learn: 'Learn More'
        },
    ]

    return(
        <section className = "flex items-center justify-center px-10 max-md:px-4 py-10 max-md:py-3 bg-[#0F0F0F]">

            {/*ГлАвНыЙ*/}
            <div className = "flex flex-col items-center gap-2.5 border-2 border-[#1F1F1F] p-2.5 rounded-[20px]">
                {/*Побочный */}
                <div className="bg-[#191919] p-10 max-md:p-6 w-full rounded-2xl flex justify-center items-center ">
                    <h2 className = "font-semibold text-[38px] max-md:text-[28px] leading-[100%] tracking-[0%] uppercase text-[#F9EFEC]">Reasons to Choose NexGen for Your Digital Journey</h2>
                </div>

                <div className = "flex max-md:flex flex-row max-md:flex-col gap-4 justify-around w-full">
                    {cards.map((item, index)=>(
                        <div key={index} className = "flex flex-col  bg-[#191919] rounded-xl p-7.5 max-md:p-6 gap-2.5 max-md:gap-2 transition-transform duration-300 hover:scale-105">
                            <h2 className = "font-['Roboto_Flex'] font-medium text-[22px] max-md:text-xl leading-[150%] tracking-[0%] uppercase text-[#F9EFEC] max-w-67 max-md:w-full">{item.title}</h2>
                            <p className="font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#B3B3B2] max-w-67 max-md:w-full">{item.description}</p>
                            <span className="flex flex-row gap-2 items-center">

                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#0F0F0F"/>
                                <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#262626"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.875 19.125L32.25 19.125C32.4158 19.125 32.5747 19.1908 32.6919 19.3081C32.8092 19.4253 32.875 19.5842 32.875 19.75V29.125C32.875 29.4702 32.5952 29.75 32.25 29.75C31.9048 29.75 31.625 29.4702 31.625 29.125V21.2589L20.1919 32.6919C19.9479 32.936 19.5521 32.936 19.3081 32.6919C19.064 32.4479 19.064 32.0521 19.3081 31.8081L30.7411 20.375L22.875 20.375C22.5298 20.375 22.25 20.0952 22.25 19.75C22.25 19.4048 22.5298 19.125 22.875 19.125Z" fill="#E7BEB1"/>
                                </svg>

                                <h3 className = "font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#B3B3B2] ">{item.learn}</h3>

                            </span>
                        </div>
                    ))}
                </div>


            </div>

        </section>
    )
}