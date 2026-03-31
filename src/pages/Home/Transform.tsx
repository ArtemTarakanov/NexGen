export default function Transform(){
    return(
        <section className = "h-full bg-[#0F0F0F] p-10 pb-5 max-md:px-4 max-md:py-3 flex items-center justify-center">

            {/*Main*/}
            <div className = "bg-[#CE7D63] flex flex-row max-md:flex-col p-15 max-md:p-7.5 rounded-[20px] items-end max-md:items-center justify-between w-full max-md:gap-4">

                <div className = "flex flex-col gap-1">
                    <h1 className = "font-['Roboto_Flex'] font-medium text-[42px] max-md:text-[28px] leading-[150%] tracking-[0%] uppercase text-[#0F0F0F]">Ready to Transform Your Digital Presence?</h1>
                    <p className="font-['Roboto_Flex'] font-normal text-base max-md:text-sm leading-[150%] tracking-[0%] text-[#262626] max-w-229">Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
                </div>

                <button className = "flex flex-row gap-2 items-center bg-[#0F0F0F] h-full py-3 px-6 rounded-xl max-md:w-full max-md:justify-center">
                    <a href="#" className = "font-['Roboto_Flex'] font-medium text-sm leading-[150%] tracking-[0%] uppercase text-[#F3DFD8]">Get in Touch</a>

                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5625 3.4375L17.875 3.4375C18.0573 3.4375 18.2322 3.50993 18.3611 3.63886C18.4901 3.7678 18.5625 3.94266 18.5625 4.125V14.4375C18.5625 14.8172 18.2547 15.125 17.875 15.125C17.4953 15.125 17.1875 14.8172 17.1875 14.4375V5.78477L4.61114 18.3611C4.34265 18.6296 3.90735 18.6296 3.63886 18.3611C3.37038 18.0926 3.37038 17.6574 3.63886 17.3889L16.2152 4.8125L7.5625 4.8125C7.1828 4.8125 6.875 4.5047 6.875 4.125C6.875 3.7453 7.1828 3.4375 7.5625 3.4375Z" fill="#E7BEB1"/>
                    </svg>



                </button>

            </div>

        </section>
    )
}