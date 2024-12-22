import { FaCheck, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiAlertTriangle, FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { TbPencil } from "react-icons/tb";
import { Container, ServiceList } from "../LocalData/LocalData";
import { IoIosCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

export default function CreateService({modalCondition}) {
  const sampleName = useRef("");
  const [warnCond,setWarnCond] = useState(false);
  const [selection,setSelection] = useState([]);
  const [modalEffect,setEffect] = useState(true);

  const formHandler=(event)=>{
    event.preventDefault();
    const checkValue = sampleName.current.value;

    if(!checkValue){
      setWarnCond(true)

      sampleName.current.value = ""
    }
  }

  const optSelection=(idNumber)=>{
    setSelection((prev)=>{
      if(prev.includes(idNumber)){
        return prev.filter(items=>items != idNumber);
      }else{
        return [...prev,idNumber]
      }
    })
  }

  const conditionalModal=()=>{
    setEffect(false);

    setTimeout(()=>{
      modalCondition("setupServer")
    },200)
  }
  useEffect(()=>{
    if(warnCond){
      setTimeout(()=>{
        setWarnCond(false)
      },4000)
    }
  },[warnCond])
  return (
    <>
    <section className={`w-[1050px] h-[42px] mx-auto flex flex-row items-center justify-between mt-[72px] bg-[#f8a6430a] pl-6 pr-[18px] rounded-[4px] transition-all duration-150 ease-linear ${warnCond?"opacity-100":"opacity-0"}`}>
        <div className="flex flex-row items-center gap-x-[10px]">
          <span>
          <FiAlertTriangle className="text-lg text-[#F8A643]"/>
          </span>

          <p className="text-[#A1A7BA] font-dmSans font-normal text-sm leading-[14px]">
          Warning: You must create a name for your Blueprint
          </p>
        </div>

        <div className="h-3 w-3 rounded-[4px] border border-[#F8A643] flex justify-center items-center hover:cursor-pointer" onClick={()=>{setWarnCond(!warnCond)}}>
        <RxCross2 className=" text-[6px] text-[#F8A643]"/>
        </div>
      </section>

      <section className={`w-[1050px] mx-auto bg-[#1D2239] rounded-lg pt-8 mt-[14px] transition-all duration-500 ease-linear ${modalEffect?"opacity-100":"opacity-0"}`}>
        <div className="w-[986px] mx-auto flex flex-row justify-between items-center">
          <h2 className=" font-dmSans font-medium text-[32px] leading-[35.2px] text-[#FFFFFF] capitalize">
            create blueprint
          </h2>

          <span className="h-6 w-6 rounded-lg border border-[#919DB9] flex justify-center items-center transition-all duration-150 ease-linear hover:cursor-pointer group hover:border-[#919DB9]/60 active:bg-[#919DB9]" onClick={conditionalModal}>
        <RxCross2 className="text-[#919DB9] transition-all duration-150 ease-linear group-hover:scale-125 active:text-black" />
        </span>
        </div>

        <div className="w-[986px] mx-auto mt-8">
          <div className="w-full h-[56px] relative">
          <form onSubmit={formHandler}>
            <input
              type="text"
              className={`h-full w-full bg-transparent rounded-[4px] border font-dmSans font-normal text-base leading-[18px]  pl-[61px] absolute top-0 left-0 focus:border-[#32BA7C] focus:outline-none ${warnCond?"border-[#FC573B] text-[#FC573B] placeholder:text-[#FC573B] focus:border-[#FC573B]":"border-[#313A6C] text-[#919DB9]"}`}
              ref={sampleName}
              placeholder="Name your blueprint"
            />
            </form>
            <span className="h-6 w-6 flex justify-center items-center absolute top-4 left-[29px]">
              <TbPencil className={`text-2xl  ${warnCond?"text-[#FC573B]":"text-[#FFFFFF]"}`} />
            </span>
          </div>
        </div>

        <div className="w-[986px] h-[60px] rounded-[4px] mx-auto bg-[#171A30] flex flex-row items-center justify-between pl-5 pr-[7px] mt-4">
          <div>
            <ul className="flex flex-row gap-x-10">
              <li className=" font-dmSans font-medium text-lg leading-5 capitalize text-[#A1A7BA] transition-all duration-150 ease-linear hover:cursor-pointer hover:text-[#FFFFFF] after:content-'' after:h-[2px] after:w-[100px] after:bg-white after:table after:translate-y-[18px] after:translate-x-[-18px] after:opacity-0 hover:after:opacity-100">
                themes
              </li>
              <li
                className=" font-dmSans font-medium text-lg leading-5 capitalize text-[#A1A7BA]
                            transition-all duration-150 ease-linear hover:cursor-pointer hover:text-[#FFFFFF] after:content-'' after:table after:h-[2px] after:w-[100px] after:bg-white after:translate-y-[18px] after:translate-x-[-18px] after:opacity-0 hover:after:opacity-100"
              >
                plugins
              </li>
              <li
                className=" font-dmSans font-medium text-lg leading-5 capitalize text-[#A1A7BA]
                            transition-all duration-150 ease-linear hover:cursor-pointer hover:text-[#FFFFFF] after:content-'' after:table after:h-[2px] after:w-[170px] after:bg-white after:translate-y-[18px] after:translate-x-[-18px] after:opacity-0 hover:after:opacity-100"
              >
                popular plugins
              </li>
            </ul>
          </div>

          <div className="w-[311px]">
            <div className="w-full h-10 relative">
              <input
                type="text"
                className="absolute top-0 left-0 h-full w-full bg-[#1D2239] font-dmSans font-normal text-sm leading-5 text-[#74778E] pl-4 rounded-md"
                placeholder="Search"
              />
              <span className="absolute h-6 w-6 top-2 right-2">
                <FiSearch className="text-2xl text-[#C1C9DE]" />
              </span>
            </div>
          </div>
        </div>

        <div className="w-[986px] mx-auto mt-[21px] flex flex-row flex-wrap gap-x-1 gap-y-4 pt-[14px]">
          {Container().map((items, index) => {
            const color = items.clr();
            return (
              <div
                className="h-12 w-12 rounded-lg flex justify-center items-center font-dmSans font-semibold text-2xl leading-6 relative transition-transform duration-150 ease-linear hover:cursor-pointer hover:translate-y-[-12px] group"
                style={{ backgroundColor: color.bg, color: color.txt }}
                key={index}
              >
                {items.title}

                <span className="absolute h-4 w-4 flex justify-center items-center rounded-full bg-[#2DC774] top-[-2px] right-[-2px] group-hover:bg-[#E9F4FF]">
                  <FaCheck className="text-[7.5px] text-white group-hover:hidden" />
                  <ImCross className="hidden text-[6px] text-[#FC573B] group-hover:block" />
                </span>

                <span className="absolute h-[31px] w-[93px] font-dmSans font-normal text-xs leading-[16.8px] capitalize rounded-[4px] bg-[#232A4E] top-[-42px] text-white   hidden transition-all duration-150 ease-linear group-hover:block px-3 pt-[6px] pb-2 after:content-'' after:absolute after:border-b-[19.98px] after:border-b-transparent after:border-r-[19.98px] after:border-r-[#232A4E] after:left-[40%] after:top-[65%] after:rotate-[135deg] after:rounded-sm">
                  plugin name
                </span>
              </div>
            );
          })}
        </div>

        <div className="w-[986px] h-[524px] overflow-hidden mx-auto mt-6 grid grid-cols-[repeat(3,_318px)] gap-x-4 gap-y-4">
          {ServiceList().map((items, index) => {
            return (
              <div className={`w-full bg-[#171A30] rounded-[4px] pt-4 transition-all duration-150 ease-linear hover:border hover:border-[#147AFF] hover:cursor-pointer ${selection.includes(index)?"border border-[#147AFF]":"border-none"}`} key={index} onClick={()=>{optSelection(index)}}>
                <div className="flex flex-row justify-between px-4 mb-6">
                  <div className="flex flex-row w-[258px] gap-x-4">
                    <div className="w-12">
                      <div className="h-12 w-12 rounded-lg bg-[#1D2239] p-1">
                        <img src={items.serviceImg} alt="serviceLogo" className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div>
                      <h2 className=" font-dmSans font-medium text-base leading-4 text-[#FFFFFF] mb-2">{items.title}</h2>
                      <p className=" font-dmSans font-normal text-xs leading-[16.8px] text-[#74778E] mb-4">{items.details}</p>

                      <div>
                        <h2 className=" font-dmSans font-medium text-xs leading-[16.8px] italic">
                            <span className="text-[#74778E]">By:</span><span className="text-[#FFFFFF]"> {items.provider}</span>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className={`h-[18px] w-[18px] rounded-full flex justify-center items-center border ${selection.includes(index)?"border-[#147AFF]":"border-[#313A6C]"}`}>
                    <span>
                      {
                        selection.includes(index)?
                        <IoIosCheckmark className="text-[#147AFF]"/>:""
                      }
                    </span>
                  </div>
                </div>

                <div className="border border-[#1D2239] border-r-0 border-b-0 border-l-0 pl-4 pt-[11px] pb-3">
                  <div className="flex flex-row items-center gap-x-[4.6px]">
                    <div className="flex flex-row gap-x-[2.59px]">
                      <span>
                        <FaStar className="text-[#FF9446]"/>
                      </span>
                      <span>
                        <FaStar className="text-[#FF9446]"/>
                      </span>
                      <span>
                        <FaStar className="text-[#FF9446]"/>
                      </span>
                      <span>
                        <FaStar className="text-[#FF9446]"/>
                      </span>
                      <span>
                        <FaStarHalfAlt className="text-[#FF9446]"/>
                      </span>
                    </div>
                    <div>
                      <p className="text-[#74778E] font-medium text-xs leading-[13.2px]">(12,23)</p>
                    </div>
                  </div>

                  <div className="mt-[7px]">
                    <h4 className=" font-dmSans font-medium text-xs leading-[13.2px] text-[#74778E]">5M+ Active Installations</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[1050px] h-[75px] bg-[#232A4E] flex justify-end items-center pr-[56px]">
          <button className=" font-dmSans font-semibold text-base leading-[19.2px] text-[#FFFFFF] py-3 px-8 bg-[#147AFF] rounded-lg transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-[#147AFF]/60">
            Next
          </button>
        </div>
      </section>
    </>
  );
}
