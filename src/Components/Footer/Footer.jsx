
export default function Footer(){
    return(
        <>
            <section className="w-[1050px] mx-auto mt-[76px] py-4 border border-[#1D2239] border-r-0 border-b-0 border-l-0 mobileS:w-[320px] mobileS:px-4 mobileM:w-[375px] mobileM:px-4 mobileL:w-[425px] mobileL:px-4 tablet:w-[768px] tablet:px-4">
                <div className="w-full mx-auto flex flex-row justify-between mobileS:flex-col mobileS:items-center mobileS:gap-y-4 mobileM:flex-col mobileM:items-center mobileM:gap-y-4 mobileL:flex-col mobileL:items-center mobileL:gap-y-4">
                    <div className="mobileS:text-center mobile:text-center mobileL:text-center">
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