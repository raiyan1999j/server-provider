import { useRef, useState } from "react";
import MainLogo from "../../../public/colorLogo.png";
import ServiceImg1 from "../../../public/serviceImg1.png";
import ServiceImg2 from "../../../public/serviceImg2.png";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import { LuArrowRight } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { ExistingProduct } from "../LocalData/LocalData";

export default function SetupServer({modalCondition}) {
    const [firstToggle,setFirstToggle] = useState(false);
    const [secondToggle,setSecondToggle]= useState(true);
    const [selection,setSelection] = useState([]);
    const [modalEffect,setEffect] = useState(true);
    const [selectTag,setSelectTag]= useState(false);
    const tagRef = useRef("");

    const conditionalModal=(modal)=>{
      setEffect(false);

      setTimeout(()=>{
        modalCondition(modal)
      },200)
    }
    const optSelection=(items)=>{
      setSelection((prev)=>{
        if(prev.includes(items)){
          return prev.filter(value=>value != items)
        }else{
          return [...prev,items]
        }
      })
    }
    const tagSelection=(items)=>{
      tagRef.current.value = items;

      setSelectTag(false)
    }
  return (
    <>
      <section className={`w-[1050px] mx-auto bg-[#1D2239] mt-20 py-20 rounded-[10px] transition-all duration-150 ease-linear ${modalEffect?"opacity-100":"opacity-0"} mobileS:w-[320px] mobileS:mt-0 mobileM:mt-0 mobileM:w-[375px] mobileL:mt-0 mobileL:w-[425px] tablet:mt-0 tablet:w-[768px] laptop:w-[1024px]`}>
        <div className="w-[890px] mx-auto mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[725px]">
          <div className="flex flex-row gap-x-[15px] w-full justify-center mobileS:flex-col mobileS:items-center mobileS:gap-y-[15px] mobileM:flex-col mobileM:gap-y-[15px] mobileM:items-center mobileL:flex-col mobileL:gap-y-[15px] mobileL:items-center">
            <div className=" mobileS:text-center mobileM:text-center">
              <h2 className="font-normal text-[40px] leading-[40px] text-[#FFFFFF] capitalize font-dmSans">Set Up Your Server With</h2>
            </div>

            <div>
              <div className="w-[127.72px] h-[50px]">
                <img src={MainLogo} alt="pageLogo" className="h-full w-full object-contain"/>
              </div>
            </div>
          </div>

          <div className="w-full text-center mt-5 mobileS:px-4 mobileM:px-4 mobileL:px-4">
            <p className="font-normal text-[15px] leading-5 font-dmSans text-[#919DB9]">
              Fill in the details below to get your server set up with xCloud
            </p>
          </div>

          <div className="mt-12 mobileS:px-4 mobileM:px-4 mobileL:px-4 tablet:px-4">
            <h4 className=" font-dmSans font-medium text-lg leading-5 text-[#FFFFFF] mb-4">Server Details</h4>

            <div className="grid grid-cols-[repeat(2,_430px)] gap-x-[30px] mobileS:grid-cols-1 mobileS:gap-y-[30px] mobileM:grid-cols-1 mobileM:gap-y-[30px] mobileL:grid-cols-1 mobileL:gap-y-[30px] tablet:grid-cols-2">
              <div>
                <label htmlFor="serverName" className=" font-dmSans font-normal text-sm leading-[18.23px] text-[#74778E] capitalize">server name</label>
                <div className="w-full h-[60px] rounded-[5px] border border-[#313A6C] mt-[10px]">
                  <input type="text" id="serverName" className="bg-transparent h-full w-full font-dmSans font-normal text-sm leading-[18.23px] text-[#919DB9] pl-[25px] placeholder:text-[#919DB9] focus:border-[#32BA7C] focus:border focus:outline-none focus:rounded-[5px]" placeholder="Example Site" />
                </div>
              </div>

              <div>
                <label htmlFor="addTag" className=" font-dmSans font-normal text-sm leading-[18.23px] text-[#74778E] capitalize">add tag (optional)</label>
                <div className="w-full h-[60px] rounded-[5px] border border-[#313A6C] relative mt-[10px]">
                  <input type="text" id="addTag" className="bg-transparent h-full w-full font-dmSans font-normal text-sm leading-[18.23px] text-[#919DB9] pl-[25px] placeholder:text-[#919DB9] absolute top-0 left-0 focus:border focus:border-[#32BA7C] focus:outline-none" ref={tagRef} placeholder="Select or create tags"/>
                  <span className="absolute top-5 right-5 h-5 w-5 bg-[#313A6C] flex justify-center items-center rounded-[4px] hover:cursor-pointer" onMouseEnter={()=>{setSelectTag(true)}}>
                    <IoIosArrowDown className="text-[#C1C9DE]"/>
                  </span>

                  <div className={`absolute top-[58px] right-0 w-[80%] rounded-lg bg-[#313A6C]/80 transition-all duration-150 ease-linear ${selectTag?"opacity-100":"opacity-0"}`} onMouseLeave={()=>{setSelectTag(false)}}>
                    <ul className="font-dmSans font-normal text-sm leading-[18.23px] text-[#919DB9] capitalize flex flex-col gap-y-2 px-4 py-2">
                      <li className="rounded-md transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-gray-700" onClick={()=>{tagSelection("plugin name")}}>
                        plugin name
                      </li>
                      <li className="rounded-md transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-gray-700" onClick={()=>{tagSelection("plugin name")}}>
                        plugin name
                      </li>
                      <li className="rounded-md transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-gray-700" onClick={()=>{tagSelection("plugin name")}}>
                        plugin name
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mobileS:px-4 mobileM:px-4 mobileL:px-4 tablet:px-4">
            <h4 className=" font-dmSans font-medium text-lg leading-5 capitalize text-[#FFFFFF] mb-4">server type</h4>

            <div className="grid grid-cols-[repeat(2,_430px)] gap-x-[30px] mobileS:grid-cols-1 mobileS:gap-y-[30px] mobileM:grid-cols-1 mobileM:gap-y-[30px] mobileL:grid-cols-1 mobileL:gap-y-[30px] tablet:grid-cols-2">
              <div className="border border-[#313A6C] rounded-[5px] flex justify-center pt-4 pb-6 transition-all duration-150 ease-linear hover:border-[#147AFF]">
                <div className="flex flex-row items-center gap-x-[19px] w-[387px] mobileS:flex-col mobileS:gap-y-[19px] mobileM:flex-col mobileM:gap-y-[19px] tablet:flex-col tablet:gap-y-[19px] tablet:items-start">
                <div className="w-12 tablet:translate-x-2">
                  <div className="h-12 w-full">
                    <img src={ServiceImg1} alt="serviceImg" className="h-full w-full object-contain"/>
                  </div>
                </div>

                <div className="w-[320px] mobileS:w-auto mobileS:px-2 mobileM:w-auto mobileM:px-2 tablet:px-2">
                  <h2 className=" font-dmSans font-medium text-xl leading-[18px] capitalize text-[#FFFFFF] mb-2">go live</h2>
                  <p className=" font-dmSans font-normal text-sm leading-[19.6px] text-[#919DB9]">
                    Get your site up and running for the world to see by simply pointing your domain to the server.
                  </p>
                </div>
                </div>
              </div>

              <div className="border border-[#313A6C] rounded-[5px] flex justify-center pt-4 pb-6 transition-all duration-150 ease-linear hover:border-[#147AFF]">
                <div className="flex flex-row items-center gap-x-[19px] w-[387px] mobileS:flex-col mobileS:gap-y-[19px] mobileM:flex-col mobileM:gap-y-[19px] tablet:flex-col tablet:gap-y-[19px] tablet:items-start">
                <div className="w-12 tablet:translate-x-2">
                  <div className="h-12 w-full">
                    <img src={ServiceImg2} alt="serviceImg" className="h-full w-full object-contain"/>
                  </div>
                </div>

                <div className="w-[320px] mobileS:w-auto mobileS:px-2 mobileM:w-full mobileM:px-2 tablet:px-2">
                  <h2 className=" font-dmSans font-medium text-xl leading-[18px] capitalize text-[#FFFFFF] mb-2">Staging Environment</h2>
                  <p className=" font-dmSans font-normal text-sm leading-[19.6px] text-[#919DB9]">
                  Create your site in a staging environment and
                  refine it until it’s ready for launch.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#171A30] py-6 mt-8 rounded-[5px]">
            <div className="flex flex-row w-[842px] mx-auto mobileS:w-[320px] mobileS:px-4 mobileM:w-[375px] mobileM:px-4 mobileL:w-[375px] mobileL:px-4 tablet:w-[725px] tablet:px-4 tablet:justify-between">
            <div className="w-[755px] mobileS:w-auto">
              <h2 className="font-normal text-2xl leading-5 font-dmSans capitalize text-[#FFFFFF] mb-3">Blueprints</h2>
              <p className="font-normal text-sm leading-6 text-[#919DB9]">
                Add the following record to the DNS for your domain to get free
              </p>
            </div>

            <div>
                <div className={`h-6 w-[42px] rounded-3xl  relative flex items-center hover:cursor-pointer px-1 transition-all duration-200 ease-linear ${firstToggle?"bg-[#32BA7C]":"bg-[#EEF2F7]"}`} onClick={()=>{setFirstToggle(!firstToggle)}}>
                    <span className={`absolute h-4 w-4  rounded-full transition-transform duration-150 ease-linear ${firstToggle?"translate-x-[18px] bg-white":"translate-x-0 bg-[#9DA2AE]"}`}></span>
                </div>
            </div>
            </div>
          </div>

          <div className="bg-[#171A30] py-6 mt-8 rounded-[5px]">
            <div className="flex flex-row w-[842px] mx-auto mobileS:w-[320px] mobileS:px-4 mobileM:w-[320px] mobileM:px-4 mobileL:w-[320px] mobileL:px-4 tablet:w-[725px] tablet:px-4">
              <div className="w-[755px] mobileS:w-auto mobileM:w-auto">
                <h2 className="font-normal text-2xl leading-5 font-dmSans capitalize text-[#FFFFFF] mb-3">blueprints</h2>
                <p className="font-normal text-sm leading-6 text-[#919DB9]">
                  Add the following record to the DNS for your domain to get
                  free
                </p>
              </div>

              <div>
                <div className={`h-6 w-[42px] rounded-3xl  relative flex items-center hover:cursor-pointer px-1 transition-all duration-200 ease-linear ${secondToggle?"bg-[#32BA7C]":"bg-[#EEF2F7]"}`} onClick={()=>{setSecondToggle(!secondToggle)}}>
                    <span className={`absolute h-4 w-4  rounded-full transition-transform duration-150 ease-linear ${secondToggle?"translate-x-[18px] bg-white":"translate-x-0 bg-[#9DA2AE]"}`}></span>
                </div>
            </div>
            </div>

            <div className="grid grid-cols-[repeat(3,_270px)] gap-x-4 w-[842px] mx-auto mt-4 mobileS:grid-cols-1 mobileS:gap-y-4 mobileS:w-[320px] mobileM:grid-cols-1 mobileM:gap-y-4 mobileM:w-[320px] mobileL:grid-cols-1 mobileL:gap-y-4 mobileL:w-[320px] tablet:w-[725px] tablet:grid-cols-2 tablet:px-4 tablet:gap-y-4">
              {
                ExistingProduct().slice(0,3).map((items,index)=>{
                    return <div className={`flex flex-row justify-between w-full bg-[#1D2239] px-4 py-4 rounded-md transition-all duration-150 ease-linear hover:cursor-pointer hover:border hover:border-[#147AFF] ${selection.includes(index)?"border border-[#147AFF]":"border-none"}`} onClick={()=>{optSelection(index)}} key={index}>
                <div>
                  <div className="flex flex-row gap-x-[5px] mb-3">
                    <h5 className="font-medium text-sm leading-[14px] font-dmSans text-[#FFFFFF]">{items.title}</h5>
                    {
                        items.feature?
                        <span className="font-normal text-xs leading-3 font-dmSans text-[#FFFFFF] py-[2px] px-1 bg-[#313A6C] rounded-[4px]">
                      {items?.feature}
                    </span>:""
                    }
                  </div>

                  <div className="flex flex-row gap-x-[2px]">
                    {items.accessible.map((elem,elemIndex)=>{
                        return <span className="h-6 w-6 rounded-[4px] border border-[#373E60] flex justify-center items-center" key={elemIndex} style={{backgroundColor:`${elem.bg}`,color:`${elem.txtColor}`}}>
                        {elem.txt}
                        </span>
                    })}
                </div>

                
                </div>
                
                <div className="h-5 w-5 flex justify-center items-center">
                    <span className={`h-[15px] w-[15px] flex justify-center items-center rounded-full border-[1.5px] ${selection.includes(index)?"border-[#147AFF]":"border-[#313A6C]"}`} onClick={()=>{optSelection}}>
                    {selection.includes(index)?
                      <IoIosCheckmark className="text-[#147AFF]"/>:
                      ""
                    }
                    </span>
                </div>
              </div>
                })
              }
            </div>

            <div className="flex flex-row items-center justify-end gap-x-8 mt-4 w-[842px] mx-auto mobileS:w-[320px] mobileS:justify-between mobileS:px-2 mobileM:w-[320px] mobileM:justify-between mobileM:px-2 mobileL:w-[320px] mobileL:justify-between mobileL:px-2 tablet:w-[725px] tablet:px-4">
                <button className="flex flex-row font-dmSans font-normal text-sm leading-[14.4px] text-[#147AFF] gap-x-1 transition-all duration-150 ease-linear hover:text-white" onClick={()=>{conditionalModal("allService")}}>
                    View all
                    <span className="h-4 w-4">
                    <LuArrowRight className="text-base"/>
                    </span>
                </button>

                <button className="flex flex-row gap-x-1 items-center font-dmSans font-semibold text-sm leading-[16.8px] text-[#FFFFFF] capitalize py-[11px] px-4 bg-[#147AFF] rounded-[4px] transition-all duration-150 ease-linear hover:bg-[#147AFF]/70 mobileS:px-2" onClick={()=>{conditionalModal("createService")}}>
                <span className="h-[18px] w-[18px]">
                <FiPlus className="text-lg"/>
                </span>
                create new blueprint
                </button>
            </div>
          </div>

          <div className="mt-8 mobileS:px-4 mobileM:px-4 mobileL:px-4">
            <button className="font-normal font-dmSans text-[15px] leading-5 capitalize text-[#FFFFFF] flex flex-row gap-x-[13px] bg-[#2A325C] rounded-[4px] pl-5 py-[10px] pr-[10px]">
                more advance settings
                <span className="h-5 w-5 flex justify-center items-center">
                <IoIosArrowDown className="text-xl" />
                </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
