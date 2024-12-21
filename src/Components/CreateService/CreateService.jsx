import { FaCheck } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { TbPencil } from "react-icons/tb";

const capitalWord = "ABCDEFGHIJKLMNOPQRST";
const makeArray = capitalWord.split("");
const bgCollect= ["#CCE6FF","#FFE2A4","#FFC4C4","#80B7FF","#AFB6E5","#F4ACC8","#4CD9ED","#FFEDCD"];

const txtCollect=["#6C90B4","#CAA452","#EC6F6F","#3784E8","#707CCC","#E5699A","#1AA9BE","#EDBB63"];

const mergeColor= bgCollect.map((bg,index)=>({bg,txt:txtCollect[index]}));
const container = [];
const mergeColorLen = mergeColor.length - 1;

makeArray.map((items)=>{
    let obj = {
        title : items,
        clr : function(){
            // repeat = (repeat+1) % mergeColorLen;
            let repeat = Math.floor(Math.random() * 8);

            return mergeColor[repeat]
        }
    }

    container.push(obj)
})



export default function CreateService(){
    return(
        <>
            <section className="w-[1050px] mx-auto bg-[#1D2239] rounded-lg pt-8 px-8 mt-[72px]">
                <div className="w-[986px] mx-auto">
                    <h2 className=" font-dmSans font-medium text-[32px] leading-[35.2px] text-[#FFFFFF] capitalize">
                        create blueprint
                    </h2>
                </div>

                <div className="w-[986px] mx-auto mt-8">
                    <div className="w-full h-[56px] relative">
                        <input type="text" className="h-full w-full bg-transparent rounded-[4px] border border-[#313A6C] font-dmSans font-normal text-base leading-[18px] text-[#919DB9] pl-[61px] absolute top-0 left-0" placeholder="Name your blueprint" />
                        <span className="h-6 w-6 flex justify-center items-center absolute top-4 left-[29px]">
                        <TbPencil className="text-2xl text-[#FFFFFF]"/>
                        </span>
                    </div>
                </div>

                <div className="w-[986px] h-[60px] mx-auto bg-[#171A30] flex flex-row items-center justify-between pl-5 pr-[7px] mt-4">
                    <div>
                        <ul className="flex flex-row gap-x-10">
                            <li className=" font-dmSans font-medium text-lg leading-5 capitalize text-[#A1A7BA]">
                                themes
                            </li>
                            <li className=" font-dmSans font-medium text-lg leading-5 capitalize text-[#FFFFFF]">
                                plugins
                            </li>
                            <li className=" font-dmSans font-medium text-lg leading-5 capitalize text-[#A1A7BA]">
                                popular plugins
                            </li>
                        </ul>
                    </div>
                    
                    <div className="w-[311px]">
                        <div className="w-full h-10 relative">
                            <input type="text" className="absolute top-0 left-0 h-full w-full bg-[#1D2239] font-dmSans font-normal text-sm leading-5 text-[#74778E] pl-4 rounded-md" placeholder="Search"/>
                            <span className="absolute h-6 w-6 top-2 right-2">
                            <FiSearch className="text-2xl text-[#C1C9DE]"/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-[986px] mx-auto mt-[21px] flex flex-row flex-wrap gap-x-1 gap-y-4 pt-[14px]">
                    {
                        container.map((items,index)=>{
                            const color = items.clr();
                            return <div className="h-12 w-12 rounded-lg flex justify-center items-center font-dmSans font-semibold text-2xl leading-6 relative transition-transform duration-150 ease-linear hover:cursor-pointer hover:translate-y-[-12px] group" style={{backgroundColor:color.bg,color:color.txt}} key={index}>
                                {items.title}

                                <span className="absolute h-4 w-4 flex justify-center items-center rounded-full bg-[#2DC774] top-[-2px] right-[-2px] group-hover:bg-[#E9F4FF]">
                                <FaCheck className="text-[7.5px] text-white group-hover:hidden" />
                                <ImCross className="hidden text-[6px] text-[#FC573B] group-hover:block" />
                                </span>

                                <span className="absolute h-[31px] w-[93px] font-dmSans font-normal text-xs leading-[16.8px] capitalize rounded-[4px] bg-[#232A4E] top-[-42px] text-white opacity-0 transition-opacity duration-150 ease-linear group-hover:opacity-100 px-3 pt-[6px] pb-2 after:content-'' after:absolute after:border-b-[19.98px] after:border-b-transparent after:border-r-[19.98px] after:border-r-[#232A4E] after:left-[40%] after:top-[65%] after:rotate-[135deg] after:rounded-sm">
                                    plugin name
                                </span>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}