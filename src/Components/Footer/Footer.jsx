
export default function Footer(){
    return(
        <>
            <section className="w-[1050px] mx-auto mt-[76px] py-4 border border-[#1D2239] border-r-0 border-b-0 border-l-0 hidden">
                <div className="w-full mx-auto flex flex-row justify-between">
                    <div>
                        <h5 className="font-normal font-dmSans text-sm leading-4 text-[#919DB9]">
                        Copyright © 2024 | <span className="text-[#FFFF]">xCloud Hosting</span> LLC. All rights reserved.
                        </h5>
                    </div>

                    <div>
                        <h5 className="font-normal font-dmSans text-sm leading-4 text-[#919DB9]">
                        xCloud <span className="text-[#FFFF] underline">v1.2.2</span>
                        </h5>
                    </div>
                </div>
            </section>
        </>
    )
}