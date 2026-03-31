export default function String(){
    return(
        <section className = "h-full px-10 py-5  max-md:px-4 max-md:py-3 bg-[#0F0F0F]">

            <div className="w-full">
                <div className="overflow-hidden bg-[#191919] py-5 max-md:py-3.5 rounded-[10px]">
                    <div className="flex items-center  gap-6 whitespace-nowrap text-[#676665] font-['Roboto_Mono'] font-normal text-xl max-md:text-sm animate-marquee">
                        {Array.from({ length: 2 }, (_, i) =>
                            ["Digital Marketing", "Website Design", "Branding", "Website Development", "Mobile App Development"].map((item, j) => (
                                <span key={`${i}-${j}`} className="flex items-center gap-6">
                                        {item}
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                            <circle cx="3.5" cy="3.5" r="3.5" fill="#CE7D63"/>
                                        </svg>
                                    </span>
                            ))
                        )}
                    </div>
                </div>
            </div>

        </section>
    )
}