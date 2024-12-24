import { MdAdd } from "react-icons/md";
import { ExistingProduct } from "../LocalData/LocalData";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

export default function AllService({modalCondition}) {
    const [selection,setSelection] = useState([]);
    const [modalEffect,setEffect] = useState(true);

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
  return (
    <>
      <section className={`w-[1050px] mx-auto bg-[#1D2239] rounded-lg mt-20 py-8 px-8 transition-opacity duration-150 ease-linear ${modalEffect?"opacity-100":"opacity-0"} mobileS:w-[320px] mobileS:px-0 mobileM:w-[375px] mobileM:px-0 mobileL:w-[425px] mobileL:px-0`}>
        <div className="w-[986px] mx-auto flex flex-row items-center justify-between mobileS:w-[320px] mobileS:flex-col mobileS:gap-y-4 mobileM:w-[375px] mobileM:flex-col mobileM:gap-y-4 mobileL:w-[425px] mobileL:flex-col mobileL:gap-y-4">
          <div>
            <h2 className=" font-dmSans font-medium text-[32px] leading-[35.2px] capitalize text-[#FFFFFF]">all blueprint</h2>
          </div>

          <div>
            <button className="flex flex-row items-center font-dmSans font-semibold text-lg leading-[16.8px] capitalize text-[#FFFFFF] bg-[#147AFF] rounded-[4px] py-[11.5px] px-4 gap-x-[0.5px] transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-[#147AFF]/60" 
            onClick={()=>{conditionalModal("createService")}}>
            <span className="h-[18px] w-[18px]">
            <MdAdd className="text-[18px]"/>
            </span>
              create new blueprint
            </button>
          </div>
        </div>

        <div className="w-[986px] mx-auto grid grid-cols-[repeat(3,_318px)] gap-x-4 gap-y-4 mt-8 mobileS:w-[320px] mobileS:grid-cols-1 mobileS:px-4 mobileM:w-[375px] mobileM:grid-cols-1 mobileM:px-4 mobileL:w-[425px] mobileL:grid-cols-1 mobileL:px-4">
          {ExistingProduct().map((items, index) => {
              return (
                <div
                  className={`flex flex-row justify-between w-full bg-[#171A30] px-4 py-4 rounded-md transition-all duration-150 ease-linear hover:cursor-pointer hover:border hover:border-[#147AFF] ${
                    selection.includes(index)
                      ? "border border-[#147AFF]"
                      : "border-none"
                  }`}
                  onClick={() => {
                    optSelection(index);
                  }}
                  key={index}
                >
                  <div>
                    <div className="flex flex-row gap-x-[5px] mb-3">
                      <h5 className="font-medium text-sm leading-[14px] font-dmSans text-[#FFFFFF]">
                        {items.title}
                      </h5>
                      {items.feature ? (
                        <span className="font-normal text-xs leading-3 font-dmSans text-[#FFFFFF] py-[2px] px-1 bg-[#313A6C] rounded-[4px]">
                          {items?.feature}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="flex flex-row gap-x-[2px]">
                      {items.accessible.map((elem, elemIndex) => {
                        return (
                          <span
                            className="h-6 w-6 rounded-[4px] border border-[#373E60] flex justify-center items-center"
                            key={elemIndex}
                            style={{
                              backgroundColor: `${elem.bg}`,
                              color: `${elem.txtColor}`,
                            }}
                          >
                            {elem.txt}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="h-5 w-5 flex justify-center items-center">
                    <span
                      className={`h-[15px] w-[15px] flex justify-center items-center rounded-full border-[1.5px] ${
                        selection.includes(index)
                          ? "border-[#147AFF]"
                          : "border-[#313A6C]"
                      }`}
                      onClick={() => {
                        optSelection;
                      }}
                    >
                      {selection.includes(index) ? (
                        <IoIosCheckmark className="text-[#147AFF]" />
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="w-[986px] mx-auto mt-12 text-right mobileS:w-[320px] mobileS:text-center mobileS:mb-20 mobileM:w-[375px] mobileM:text-center mobileM:mb-20 mobileL:w-[425px] mobileL:text-center mobileL:mb-20">
            <button className=" font-dmSans font-semibold text-base leading-[19.2px] capitalize text-[#FFFFFF] bg-[#2DC774] rounded-lg py-3 px-6 transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-[#2DC774]/60"
            onClick={()=>{conditionalModal("setupServer")}}>
                ok
            </button>
        </div>
      </section>
    </>
  );
}
