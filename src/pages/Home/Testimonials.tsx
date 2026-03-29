export default function Testimonials(){

    const cards = [
        {
            title: 'NexGen turned our business around!',
            description: 'Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!',
            image: '/images/team-11.png',
            name: 'Sarah Thompson',
            status: 'CEO of BlueBloom',
        },
        {
            title: 'NexGen turned our business around!',
            description: 'Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!',
            image: '/images/team-12.png',
            name: 'Wade Warren',
            status: 'Art Director',
        },
        {
            title: 'Working with NexGen was a pleasure.',
            description: 'Their web design team created a stunning website that perfectly captured our brand\'s essence. The feedback from our customers has been overwhelmingly positive.',
            image: '/images/team-13.png',
            name: 'Lisa Williams',
            status: 'CEO Of HealthTech',
        },
        {
            title: 'NexGen web design brought our vision',
            description: 'Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.',
            image: '/images/team-14.png',
            name: 'Jennifer Lee',
            status: 'COO of Foodie Haven',
        },
    ]


    return(
        <section className = "h-full bg-[#0F0F0F] p-10 max-md:px-4 max-md:py-3">
            {/*Main*/}
            <div className = "flex flex-col border-2 border-[#1F1F1F] rounded-[20px] gap-2.5 p-2.5">

                {/*Heading*/}
                <div className = "bg-[#191919] py-11 max-md:p-6 px-10 rounded-[14px]">
                    <h2 className = "max-md:text-center font-['Roboto_Flex'] font-semibold text-[38px] max-md:text-[28px] leading-[100%] tracking-[0%] uppercase text-[#F9EFEC]">Testimonials</h2>
                </div>

                {/*Cards*/}
                <div className="overflow-x-auto scrollbarWidth: 'none', msOverflowStyle: 'none' w-full">
                    <div className = "flex gap-2.5">
                        {cards.map((item, index) => (
                            /*Card*/
                            <div key={index} className="flex flex-col bg-[#191919] rounded-[14px] justify-between transition-transform duration-300 hover:scale-105 max-md:flex-shrink-0">

                                <div className="flex flex-col gap-5 max-md:gap-4 p-7.5 max-md:p-6">
                                    <h2 className = "font-['Roboto_Flex'] font-medium text-[22px] max-md:text-lg max-md:max-w-72 leading-[150%] tracking-[0%] uppercase text-[#F9EFEC]">{item.title}</h2>
                                    <p className="font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#B3B3B2] max-w-66">{item.description}</p>
                                </div>

                                <div className = "flex flex-row py-4 w-full justify-between items-center bg-[#1F1F1F] p-9 max-md:px-7 rounded-b-[14px]">

                                    <img src={item.image} alt="image" className = "w-12.5 max-md:w-11 h-12.5 max-md:h-11 rounded-full object-cover bg-[#CE7D63]"/>

                                    <div className="flex flex-col">
                                        <h3 className = "font-['Roboto_Flex'] font-medium text-lg max-md:text-base leading-[150%] tracking-[0px] text-[#F3DFD8]">{item.name}</h3>
                                        <p className = "font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0px] text-[#81807E]">{item.status}</p>
                                    </div>

                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#1F1F1F"/>
                                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#333333"/>
                                        <path d="M21.25 13.75L27.5 20M27.5 20L21.25 26.25M27.5 20H12.5" stroke="#E7BEB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}