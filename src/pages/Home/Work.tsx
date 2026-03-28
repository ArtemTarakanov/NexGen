export default function Work(){

    const cards = [
        {
            icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" fill="#1F1F1F"/>
                    <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" stroke="#333333"/>
                    <path d="M29.2081 18.2602L28.5395 18.6562C27.8052 19.0911 27.438 19.3085 27.0335 19.3592C26.629 19.4098 26.233 19.288 25.441 19.0442L24.72 18.8224C21.9328 17.9647 20.5393 17.5359 19.7016 18.3026C18.8639 19.0693 19.1369 20.5237 19.6829 23.4326L19.8241 24.1852C19.9792 25.0118 20.0568 25.4252 19.9648 25.8289C19.8728 26.2327 19.6216 26.5812 19.1192 27.2783L18.6619 27.9129C16.894 30.3658 16.01 31.5922 16.4413 32.609C16.8725 33.6258 18.3333 33.7595 21.255 34.0269L22.0108 34.0961C22.8411 34.1721 23.2562 34.2101 23.6038 34.409C23.9514 34.6078 24.1922 34.9451 24.6737 35.6196L25.1121 36.2337C26.8066 38.6073 27.6539 39.7942 28.7581 39.6559C29.8623 39.5176 30.4921 38.1457 31.7518 35.4021L32.0777 34.6923C32.2607 34.2938 32.3969 33.9972 32.5273 33.7649L37.8812 39.1188C38.2229 39.4605 38.7769 39.4605 39.1186 39.1188C39.4603 38.777 39.4603 38.223 39.1186 37.8813L33.9482 32.7109C34.0906 32.6591 34.2495 32.6035 34.4284 32.5408L35.1567 32.2858C37.9718 31.2998 39.3794 30.8069 39.6306 29.7046C39.8818 28.6024 38.8102 27.6209 36.6672 25.6578L36.1127 25.1499C35.5037 24.5921 35.1992 24.3131 35.0413 23.9407C34.8833 23.5682 34.8897 23.1444 34.9026 22.2967L34.9143 21.525C34.9597 18.542 34.9823 17.0505 34.0334 16.5076C33.0844 15.9646 31.7923 16.7298 29.2081 18.2602Z" fill="#CE7D63"/>
                </svg>
            ),

            title: 'Zenith Fitness App',
            category: 'Mobile App Development',
            time: '6 months',
            description: 'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance',
            image: '/images/card-1.png',

            tecnologies: [
                'React Native', 'Firebase', 'Redux', 'REST API', 'MongoDB'
            ],

            team: [
                '/images/team-1.png',
                '/images/team-2.png',
                '/images/team-3.png',
                '/images/team-4.png',
                '/images/team-5.png',
            ]
        },
        {
            icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" fill="#1F1F1F"/>
                    <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" stroke="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.7497 25.1539C36.7887 29.9863 32.7617 34.4556 27.9294 34.4166C23.0971 34.3777 19.2893 29.845 19.2503 25.0127C19.2113 20.1804 23.0971 16.2946 27.9294 16.3336C32.7617 16.3726 36.7107 20.3216 36.7497 25.1539ZM28.5904 20.125C28.1072 20.1211 27.7123 20.5097 27.7084 20.9929C27.7045 21.4762 28.093 21.8711 28.5763 21.875C30.0161 21.8866 31.1967 23.0672 31.2084 24.507C31.2123 24.9903 31.6072 25.3789 32.0904 25.375C32.5736 25.3711 32.9622 24.9762 32.9583 24.4929C32.939 22.0977 30.9856 20.1443 28.5904 20.125Z" fill="#CE7D63"/>
                    <path d="M30.5281 35.2501C30.9157 36.4895 30.1125 37.7371 28.875 37.9885V39.6665C28.875 40.1497 28.4833 40.5415 28 40.5415C27.5168 40.5415 27.125 40.1497 27.125 39.6665V37.9885C25.8876 37.7371 25.0844 36.4895 25.4719 35.2501L25.48 35.2252C26.255 35.4512 27.0716 35.5762 27.92 35.5831C28.8195 35.5903 29.6908 35.4635 30.5194 35.2227C30.5224 35.2319 30.5253 35.241 30.5281 35.2501Z" fill="#CE7D63"/>
                </svg>

            ),

            title: 'A-Aura Ecommerce',
            category: 'Web Design & Development',
            time: '3 months',
            description: 'A complete overhaul of a corporate website to enhance its brand identity and user experience.',
            image: '/images/card-2.png',

            tecnologies: [
                'WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript'
            ],

            team: [
                '/images/team-6.png',
                '/images/team-7.png',
                '/images/team-8.png',
                '/images/team-9.png',
                '/images/team-10.png',
            ]
        },


    ]

    return(
        <section className = "h-full bg-[#0F0F0F] flex items-center justify-center p-10 max-md:px-4 max-md:py-3">

            {/*Main*/}
            <div className = "flex flex-col gap-2.5 w-full max-md:border-2 max-md:border-[#1F1F1F] max-md:rounded-[20px] max-md:p-2.5">

                {/*Heading*/}
                <div className = "bg-[#191919] py-11 max-md:px-6 px-10 max-md:py-6 rounded-[14px] flex flex-row justify-between max-md:justify-start items-center ">
                    <h1 className = "font-['Roboto_Flex'] font-semibold text-[38px] max-md:text-[28px] leading-[100%] tracking-[0%] uppercase text-[#F9EFEC]">Our Works</h1>
                    <span className = "flex flex-row items-center gap-2 max-md:hidden">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#1F1F1F"/><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#262626"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.875 19.125L32.25 19.125C32.4158 19.125 32.5747 19.1908 32.6919 19.3081C32.8092 19.4253 32.875 19.5842 32.875 19.75V29.125C32.875 29.4702 32.5952 29.75 32.25 29.75C31.9048 29.75 31.625 29.4702 31.625 29.125V21.2589L20.1919 32.6919C19.9479 32.936 19.5521 32.936 19.3081 32.6919C19.064 32.4479 19.064 32.0521 19.3081 31.8081L30.7411 20.375L22.875 20.375C22.5298 20.375 22.25 20.0952 22.25 19.75C22.25 19.4048 22.5298 19.125 22.875 19.125Z" fill="#E7BEB1"/></svg>
                        <h3 className = "font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#B3B3B2] uppercase">ALL Works</h3>
                    </span>
                </div>

                {/*Cards Column*/}
                <div className="flex flex-col items-center gap-2.5 w-full">

                    {/*Card*/}
                    <div className = "flex flex-col gap-2.5 w-full ">
                        {cards.map((item, index)=>(
                            <div key={index} className="flex flex-row max-md:flex max-md:flex-col border-2 border-[#1F1F1F] rounded-[20px] p-2.5 gap-2.5 max-md:gap-0 ">
                                <div className="flex flex-col px-7.5 max-md:px-6 py-12.5 max-md:py-6 bg-[#191919] rounded-[14px] gap-7.5 max-md:gap-5 transition-transform duration-300 hover:scale-102 max-md:order-2 max-md:rounded-t-none">

                                    {/*Icon + Heading*/}
                                    <span className = "flex flex-row gap-4">
                                        <div className = "flex flex-row items-center gap-2.5">
                                            <span>{item.icon}</span>
                                            <h2 className = "font-['Roboto_Flex'] font-medium text-lg max-md:text-base leading-[150%] tracking-[0%] uppercase text-[#F9EFEC]">{item.title}</h2>
                                        </div>

                                        <span className = "flex flex-row items-center gap-2 max-md:hidden">
                                            <svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#1F1F1F"/><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#262626"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.875 19.125L32.25 19.125C32.4158 19.125 32.5747 19.1908 32.6919 19.3081C32.8092 19.4253 32.875 19.5842 32.875 19.75V29.125C32.875 29.4702 32.5952 29.75 32.25 29.75C31.9048 29.75 31.625 29.4702 31.625 29.125V21.2589L20.1919 32.6919C19.9479 32.936 19.5521 32.936 19.3081 32.6919C19.064 32.4479 19.064 32.0521 19.3081 31.8081L30.7411 20.375L22.875 20.375C22.5298 20.375 22.25 20.0952 22.25 19.75C22.25 19.4048 22.5298 19.125 22.875 19.125Z" fill="#E7BEB1"/></svg>

                                            <h3 className = "font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#B3B3B2] uppercase">Details</h3>
                                        </span>
                                    </span>

                                    {/*Category + Time Taken*/}
                                    <div className = "flex flex-col gap-2.5 ">

                                        {/*Categoty*/}
                                        <div className="py-2 max-md:py-1.5 px-4 max-md:px-2.5 bg-[#1F1F1F] rounded-[45px] inline-flex flex-row items-center gap-1.5 w-fit transition-transform duration-300 hover:scale-110 max-md:whitespace-nowrap">
                                                <p className="font-['Roboto_Flex'] font-normal text-sm max-md:text-xs leading-[150%] tracking-[0%] text-[#B3B3B2]">Category</p>
                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#CE7D63"/></svg>
                                                <p className="font-['Roboto_Flex'] font-medium text-sm max-md:text-xs leading-[150%] tracking-[0%] text-[#E6E6E6] ">{item.category}</p>
                                        </div>

                                        {/*Time*/}
                                        <div className="py-2 max-md:py-1.5 px-4 max-md:px-2.5 bg-[#1F1F1F] rounded-[45px] inline-flex flex-row items-center gap-1.5 w-fit transition-transform duration-300 hover:scale-110">
                                                <p className="font-['Roboto_Flex'] font-normal text-sm max-md:text-xs leading-[150%] tracking-[0%] text-[#B3B3B2]">Time Taken</p>
                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#CE7D63"/></svg>
                                                <p className="font-['Roboto_Flex'] font-medium text-sm max-md:text-xs leading-[150%] tracking-[0%] text-[#E6E6E6]">{item.time}</p>
                                        </div>
                                    </div>

                                    {/*Description*/}

                                    <p className = "max-w-95 font-['Roboto_Flex'] font-normal max-md:text-sm text-base leading-[150%] tracking-[0%] text-[#B3B3B2]">{item.description}</p>

                                </div>

                                {/*Image*/}
                                <img src={item.image} alt="image" className="max-w-110 max-md:w-full h-auto max-md:max-h-46 rounded-[14px] transition-transform duration-300 hover:scale-102 max-md:order-1 max-md:object-cover max-md:rounded-b-none"/>


                                {/*Technologies & Team Members*/}
                                <div className="flex flex-col gap-2.5 justify-center flex-1 max-md:hidden">

                                    {/*Technologies*/}
                                    <div className="flex flex-col p-7.5 rounded-[10px] bg-[#191919] gap-4 w-full transition-transform duration-300 hover:scale-102">
                                        <h2 className = "font-['Roboto_Flex'] font-medium text-base leading-[150%] tracking-[0%] uppercase text-[#FFFFFF]">Technologies Used</h2>

                                        <div className = "grid grid-cols-3 gap-2">
                                            {item.tecnologies.map((tecnology) => (
                                                <div key={tecnology} className = "bg-[#1F1F1F] flex items-center justify-center rounded-[45px] px-3.5 py-2 transition-transform duration-300 hover:scale-108">
                                                    <p className = "font-['Roboto_Mono'] font-normal text-sm leading-[150%] tracking-[0%] text-[#E6E6E6]">{tecnology}</p>
                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                    {/*Team Members*/}
                                    <div className="flex flex-row gap-7.5 bg-[#191919] items-center p-7.5 rounded-[10px] w-full transition-transform duration-300 hover:scale-102">
                                        <p className="font-['Roboto_Flex'] font-medium text-base leading-[150%] tracking-[0%] uppercase text-[#FFFFFF]">Team Members</p>

                                        <div className = "flex flex-row gap-2">
                                            {item.team.map((team) => (

                                                <img src={team} alt="team" className="w-10 h-10  bg-[#E7BEB1] rounded-full object-cover transition-transform duration-300 hover:scale-125"/>
                                            ))}
                                        </div>


                                    </div>

                                    <button className = "bg-[#CE7D63] px-44 py-3.5 rounded-lg transition-transform duration-300 hover:scale-103">
                                        <a href="#" className = "font-['Roboto_Flex'] font-medium text-sm leading-[150%] tracking-[0%] uppercase text-[#0F0F0F]">Book A Call</a>
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </section>
    )
}