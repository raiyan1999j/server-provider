import MainLogo from '../../../public/logoWhite.png';
import Avatar from "../../../public/avatar.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiNotification2Line } from 'react-icons/ri';
import ResponsiveNav from './ResponsiveNav';

export default function Navbar(){
    return(
        <>
            <nav className="w-[1650px] h-[100px] mx-auto bg-[#1D2239] px-[50px] flex flex-row justify-between items-center mobileS:hidden mobileM:hidden mobileL:hidden">
          <div>
            <div className='w-[127.72px] h-[50px]'>
              <img src={MainLogo} alt="logoImg" className='h-full w-full object-cover' />
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className='mr-[41px] h-6 w-6 relative'>
              <span>
              <RiNotification2Line className='text-[#C1C9DE] text-2xl'/>
              </span>
              <span className='h-[7px] w-[7px] rounded-full bg-[#2DC774] absolute -top-1 -right-1'></span>
            </div>

            <div className="flex flex-row items-center gap-x-[10px] w-[179px] h-[50px] rounded-[10px] border border-[#171A30] pl-[5px]">
              <div className='h-10 w-10 bg-[#FFFFFF] flex justify-center items-center rounded-full'>
                <div>
                  <img src={Avatar} alt="profileImg" />
                </div>
              </div>

              <div className='flex flex-row gap-x-[13px]'>
                <h4 className='font-bold text-[15px] leading-5 tracking-[-4%] font-dmSans text-[#FFFFFF] capitalize'>
                  mark adam
                </h4>
                <span className='h-5 w-5 flex justify-center items-center bg-[#171A30] rounded-[4px]'>
                <MdOutlineKeyboardArrowDown className='text-[#C1C9DE]'/>
                </span>
              </div>
            </div>
          </div>
            </nav>

            <ResponsiveNav/>
        </>
    )
}