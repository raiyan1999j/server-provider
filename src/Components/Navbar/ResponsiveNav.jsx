import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Avatar from "../../../public/avatar.png";
import PageLogo from "../../../public/logoWhite.png";
import { useState } from "react";
import { RiNotification2Line } from "react-icons/ri";

export default function ResponsiveNav() {
    const [toggleBar,setToggle] = useState(false);
    const [userMenu,setMenu] = useState(false);

  return (
    <>
      <nav className="hidden mobileS:block mobileM:block h-20 w-full fixed bottom-0 left-0">
        <div className="relative h-full w-full">
          <div className={`absolute z-30 transition-transform duration-700 ease-linear w-full h-20 top-0 left-0 bg-[#1D2239] flex justify-center items-center ${toggleBar?"translate-y-0":"translate-y-20"}`}>
            
            <div className="absolute w-full px-[10px]">
              <div className="flex flex-row w-full justify-between items-center">
                <div className="w-[100px]">
                  <div className="w-[80px]">
                    <img
                      src={PageLogo}
                      alt="pageLogo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center w-[100px] h-[50px] rounded-[10px]">
                  <div className="h-10 w-10 bg-[#FFFFFF] flex justify-center items-center rounded-full">
                    <div>
                      <img src={Avatar} alt="profileImg" />
                    </div>
                  </div>

                  <span className="h-5 w-5 flex justify-center items-center bg-[#171A30] rounded-[4px]" >
                    <MdOutlineKeyboardArrowDown className="text-[#C1C9DE] rotate-180" onClick={()=>{setMenu(!userMenu)}}/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        
          <div className={`absolute transition-all duration-300 ease-linear -z-10 w-[100px] bg-[#1D2239] px-2 py-2 right-2 rounded-tr-2xl rounded-bl-2xl ${userMenu?"top-[-65px]":"top-20"}`}>
                <div className="flex flex-row justify-between items-center transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-[#171A30]">
                    <h5 className="capitalize font-dmSans text-xs text-[#919DB9] font-bold">
                        mark
                    </h5>
                    <span className="relative h-5 w-5 flex justify-center items-center">
                        <RiNotification2Line className="text-[#919DB9] text-sm"/>

                        <span className="h-1 w-1 rounded-full bg-[#32BA7C] absolute top-0 right-0"></span>
                    </span>
                </div>

                <div className="transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-[#171A30]">
                    <button className="text-[#919DB9] capitalize font-dmSans font-bold text-xs ">
                        logout
                    </button>
                </div>
            </div>

          <div className={`absolute z-50 h-20 w-20 rounded-full bg-[#171A30] flex flex-col gap-y-1 justify-center overflow-hidden pl-5 hover:cursor-pointer left-[35%] transition-all duration-500 ease-linear ${toggleBar?"top-[-20%]":"top-0"}`} onClick={()=>{
                setToggle(!toggleBar);
                setMenu(false)
            }}>
              <span className={`h-[3px] w-[60%] bg-white rounded-lg transition-all duration-200 ease-linear ${toggleBar?"rotate-45 translate-y-[10px]":""}`}></span>
              <span className={`h-[3px] w-[40%] bg-white rounded-lg transition-transform duration-300 ease-linear group-hover:translate-x-[100px] ${toggleBar?"translate-x-[100px]":""}`}></span>
              <span className={`h-[3px] w-[60%] bg-white rounded-lg transition-all duration-200 ease-linear ${toggleBar?"-rotate-45 translate-y-[-5px]":""}`}></span>
            </div>
        </div>
      </nav>
    </>
  );
}
