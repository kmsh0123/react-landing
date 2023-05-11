import React from 'react'
import {BsWindows,BsApple,BsAndroid,BsBrowserChrome} from 'react-icons/bs';
import {FaLinux,FaRaspberryPi} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Platform = () => {
    const {mode} = useSelector(state=>state.darkMode);

  return (
    <>
        <div className="container mx-auto">
            <div className="flex justify-center">
            <h1 className={`${mode ? "text-slate-100" : "text-slate-900"} md:text-4xl text-3xl max-w-sm md:max-w-md text-center font-bold`}>Every operating system, every device</h1>
            </div>
            <p className='text-center font-bold font-sans text-slate-500 mt-3 mb-10'>Vanilla runs native clients on all major platforms.</p>
            <div className="">
                <div className="grid grid-cols-2 md:grid-cols-6 md:mt-16 gap-10 md:gap-0 px-5 md:px-0">
                    <div className="mx-auto border border-transparent hover:border-green-500 rounded-2xl p-10">
                        <BsWindows className='text-6xl mx-auto'/>
                        <p className='font-bold text-slate-500'>Windows</p>
                    </div>
                    <div className="mx-auto border border-transparent hover:border-green-500 rounded-2xl p-10">
                        <BsApple className='text-6xl mx-auto'/>
                        <p className='font-bold text-slate-500'>MacOS</p>
                    </div>
                    <div className="mx-auto border border-transparent hover:border-green-500 rounded-2xl p-10">
                        <FaLinux className='text-6xl mx-auto'/>
                        <p className='font-bold text-slate-500 ms-2'>Linux</p>
                    </div>
                    <div className="mx-auto border border-transparent hover:border-green-500 rounded-2xl p-10">
                        <BsAndroid className='text-6xl mx-auto'/>
                        <p className='font-bold text-slate-500'>Android</p>
                    </div>
                    <div className="mx-auto border border-transparent hover:border-green-500 rounded-2xl p-10">
                        <FaRaspberryPi className='text-6xl mx-auto'/>
                        <p className='font-bold text-slate-500'>RaspberryPi</p>
                    </div>
                    <div className="mx-auto border border-transparent hover:border-green-500 rounded-2xl p-10">
                        <BsBrowserChrome className='text-6xl mx-auto'/>
                        <p className='font-bold text-slate-500'>ChromeOS</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Platform