import React from 'react';
import {BsAirplane} from "react-icons/bs"
import { useSelector } from 'react-redux';

const Features = () => {
    const {mode} = useSelector(state=>state.darkMode);
  return (
    <>
        <div className="container flex flex-col md:flex-row md:justify-between items-center mx-auto py-36">

           <div className="flex flex-col md:space-y-12 md:w-[25rem] lg:w-[35rem] xl:w-auto">
                    <div className="flex flex-col md:flex-row gap-10 text-green-500 font-bold cursor-pointer">
                        <div className="text-center space-y-5 border border-transparent hover:border-green-500 duration-300 p-5 md:p-5 rounded-2xl">
                    <BsAirplane className='text-6xl mx-auto '/>
                    <h1 className='text-4xl md:max-w-md'>Blazing fast</h1>
                    <p className='max-w-sm text-slate-500'>Minimum latency viaour own DeskRT codec,<br/> Frame rates of 60 fps.</p>
                        </div>
                        <div className="text-center space-y-5 border border-transparent hover:border-green-500 duration-300 p-5 md:p-5 rounded-2xl">
                    <BsAirplane className='text-6xl mx-auto '/>
                    <h1 className='text-4xl md:max-w-md'>Blazing fast</h1>
                    <p className='max-w-sm text-slate-500'>Minimum latency viaour own DeskRT codec,<br/> Frame rates of 60 fps.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 text-green-500 font-bold cursor-pointer">
                        <div className="text-center space-y-5 border border-transparent hover:border-green-500 duration-300 p-5 md:p-5 rounded-2xl">
                    <BsAirplane className='text-6xl mx-auto '/>
                    <h1 className='text-4xl md:max-w-md'>Blazing fast</h1>
                    <p className='max-w-sm text-slate-500'>Minimum latency viaour own DeskRT codec,<br/> Frame rates of 60 fps.</p>
                        </div>
                        <div className="text-center space-y-5 border border-transparent hover:border-green-500 duration-300 p-5 md:p-5 rounded-2xl">
                    <BsAirplane className='text-6xl mx-auto '/>
                    <h1 className='text-4xl md:max-w-md'>Blazing fast</h1>
                    <p className='max-w-sm text-slate-500'>Minimum latency viaour own DeskRT codec,<br/> Frame rates of 60 fps.</p>
                        </div>
                </div>
            </div>
            <div className='mx-auto space-y-10 mt-10 md:mt-0'>
                <p className={`${mode ? "text-slate-900" : "text-slate-100"} text-4xl max-w-xs text-center font-bold`}>
                    Why 500+ million users love AnyDesk
                </p>
                <div className="flex justify-center">
                <button className='bg-[#22c55e] hover:bg-green-700 duration-300 flex items-center gap-4 text-xl text-white p-5 px-[3rem] mx-auto md:mx-0 rounded-full'>
                     <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.1431 3.37047C23.8525 2.06508 22.295 1.375 20.65 1.375C17.7152 1.375 15.1856 3.64547 14.0044 6.90938C13.4794 5.5043 12.7881 4.32695 11.8431 3.37047C10.5525 2.06508 8.995 1.375 7.35 1.375C3.29787 1.375 0 5.69336 0 11C0 16.3066 3.29787 20.625 7.35 20.625C10.29 20.625 12.8275 18.3468 14 15.0734C15.1725 18.309 17.71 20.625 20.65 20.625C24.7012 20.625 28 16.3066 28 11C28 7.98359 26.9588 5.20352 25.1431 3.37047ZM1.4 12.375C1.4 11.2376 2.34194 10.3125 3.5 10.3125C4.65806 10.3125 5.6 11.2363 5.6 12.375C5.6 13.5137 4.65806 14.4375 3.5 14.4375C2.34194 14.4375 1.4 13.5137 1.4 12.375ZM7.35 19.25C5.31081 19.25 3.50962 17.8196 2.43687 15.6458C2.77287 15.7523 3.129 15.8125 3.5 15.8125C5.42937 15.8125 7 14.2699 7 12.375C7 10.4801 5.42937 8.9375 3.5 8.9375C2.6845 8.9375 2.00638 9.22384 1.48313 9.6843C1.93944 5.75781 4.3925 2.75 7.35 2.75C8.60912 2.75 9.81662 3.29656 10.8391 4.3291C12.3419 5.84805 13.3 8.37891 13.3 11C13.3 15.5504 10.6312 19.25 7.35 19.25ZM14.7 12.375C14.7 11.2376 15.6419 10.3125 16.8 10.3125C17.9581 10.3125 18.9 11.2376 18.9 12.375C18.9 13.5124 17.9581 14.4375 16.8 14.4375C15.6419 14.4375 14.7 13.5137 14.7 12.375ZM20.65 19.25C18.606 19.25 16.8004 17.8131 15.7281 15.6307C16.0694 15.7395 16.4237 15.8125 16.8 15.8125C18.7307 15.8125 20.3 14.2708 20.3 12.375C20.3 10.4792 18.7294 8.9375 16.8 8.9375C16.0536 8.9375 15.365 9.17198 14.7963 9.56398C15.2906 5.69766 17.7231 2.75 20.65 2.75C21.9091 2.75 23.1166 3.29656 24.1391 4.3291C25.6419 5.84805 26.6 8.37891 26.6 11C26.6 15.5504 23.9312 19.25 20.65 19.25Z" fill="#F8FAFC"></path>
                    </svg>
                  Discover
                </button>                
                </div>
            </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="">
                <h1 className='text-4xl font-bold text-green-500'>500+Million</h1>
                <p className='text-2xl text-center text-slate-500 font-[Euclid-Circular-A] font-bold'>Downloads</p>
            </div>
            <div className="my-10 md:my-0">
                <h1 className='text-4xl font-bold text-green-500'>400+Million</h1>
                <p className='text-2xl text-center text-slate-500 font-[Euclid-Circular-A] font-bold'>Sessions per month</p>
            </div>
            <div className="">
                <h1 className='text-4xl text-center font-bold text-green-500'>300+Million</h1>
                <p className='text-2xl text-center text-slate-500 font-[Euclid-Circular-A] font-bold'>Bridged miles per month</p>
            </div>
        </div>
    </>
  )
}

export default Features