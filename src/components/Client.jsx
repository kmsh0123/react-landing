import React from 'react'
import { useSelector } from 'react-redux';

const Client = () => {
  const {mode} = useSelector(state=>state.darkMode);

  return (
    <>
        <h1 className={`${mode ? "text-slate-100" : "text-slate-900"} text-3xl md:text-4xl font-bold py-36 text-center`}>Vanilla fits your needs</h1>
        <div className="container flex flex-col md:flex-row md:justify-evenly space-y-7 md:space-y-0 mx-auto">
        
            <div className="text-center space-y-7 md:space-y-10 border border-transparent hover:border-green-500 max-w-xs xl:max-w-md mx-auto p-5 rounded-3xl duration-300 cursor-pointer">
               <svg className='mx-auto' width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.75 51.3333V78.8333C13.75 80.2919 14.3295 81.6909 15.3609 82.7223C16.3924 83.7538 17.7913 84.3333 19.25 84.3333H68.75C70.2087 84.3333 71.6076 83.7538 72.6391 82.7223C73.6705 81.6909 74.25 80.2919 74.25 78.8333V51.3333" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M2.75 46.3063L40.1097 8.94297C40.6204 8.43187 41.2269 8.02643 41.8944 7.74981C42.5619 7.47319 43.2774 7.33081 44 7.33081C44.7226 7.33081 45.4381 7.47319 46.1056 7.74981C46.7731 8.02643 47.3796 8.43187 47.8903 8.94297L85.25 46.3063" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M60.5 21.5563V12.8333H74.25V35.3063" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M58.41 43.4317C57.7594 42.7489 56.9769 42.2053 56.1099 41.8339C55.243 41.4625 54.3097 41.271 53.3665 41.271C52.4234 41.271 51.49 41.4625 50.6231 41.8339C49.7561 42.2053 48.9736 42.7489 48.323 43.4317L44 47.9013L39.677 43.4317C39.0264 42.7489 38.2439 42.2053 37.3769 41.8339C36.51 41.4625 35.5767 41.271 34.6335 41.271C33.6904 41.271 32.757 41.4625 31.8901 41.8339C31.0231 42.2053 30.2406 42.7489 29.59 43.4317C28.2485 44.8368 27.5 46.7048 27.5 48.6475C27.5 50.5902 28.2485 52.4582 29.59 53.8633L42.4637 67.177C42.6619 67.3849 42.9003 67.5504 43.1644 67.6634C43.4285 67.7765 43.7127 67.8348 44 67.8348C44.2873 67.8348 44.5715 67.7765 44.8356 67.6634C45.0997 67.5504 45.3381 67.3849 45.5363 67.177L58.41 53.8633C59.7515 52.4582 60.5 50.5902 60.5 48.6475C60.5 46.7048 59.7515 44.8368 58.41 43.4317V43.4317Z" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
               </svg>
            <h1 className={`${mode ? "text-slate-100" : "text-slate-900"} text-4xl text-center max-w-sm`}>Runs in Cloud or On-Premises</h1>
            <p className='max-w-xs mx-auto font-bold text-slate-500'>Minimum latency viaour own DeskRT codec, Frame rates of 60 fps.</p>
                <div className="mt-5 ">
                    <a href="#" className='underline text-green-500 font-bold'>Learn More</a>
                </div>
            </div>

            <div className="text-center space-y-7 md:space-y-10 border border-transparent hover:border-green-500 max-w-xs xl:max-w-md mx-auto p-5 rounded-3xl duration-300 cursor-pointer">
            <svg className='mx-auto' width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_104_290)">
                        <path d="M54.25 68.25H8.75" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M31.5 74.375C31.7321 74.375 31.9546 74.4672 32.1187 74.6313C32.2828 74.7954 32.375 75.0179 32.375 75.25C32.375 75.4821 32.2828 75.7046 32.1187 75.8687C31.9546 76.0328 31.7321 76.125 31.5 76.125C31.2679 76.125 31.0454 76.0328 30.8813 75.8687C30.7172 75.7046 30.625 75.4821 30.625 75.25C30.625 75.0179 30.7172 74.7954 30.8813 74.6313C31.0454 74.4672 31.2679 74.375 31.5 74.375Z" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M54.25 54.25V75.25C54.25 77.1065 53.5125 78.887 52.1997 80.1997C50.887 81.5125 49.1065 82.25 47.25 82.25H15.75C13.8935 82.25 12.113 81.5125 10.8003 80.1997C9.4875 78.887 8.75 77.1065 8.75 75.25V8.75C8.75 6.89348 9.4875 5.11301 10.8003 3.80025C12.113 2.4875 13.8935 1.75 15.75 1.75H35" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M54.25 43.75C65.848 43.75 75.25 34.348 75.25 22.75C75.25 11.152 65.848 1.75 54.25 1.75C42.652 1.75 33.25 11.152 33.25 22.75C33.25 34.348 42.652 43.75 54.25 43.75Z" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M63.609 16.646L53.459 30.2015C53.2328 30.5019 52.9449 30.7504 52.6146 30.9302C52.2843 31.11 51.9193 31.2169 51.5443 31.2438C51.1692 31.2707 50.7927 31.2168 50.4401 31.086C50.0876 30.9551 49.7672 30.7501 49.5005 30.485L44.2505 25.235" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_104_290">
                        <rect width="84" height="84" fill="white"></rect>
                        </clipPath>
                        </defs>
            </svg>
            <h1 className={`${mode ? "text-slate-100" : "text-slate-900"} text-4xl text-center max-w-sm`}>Full mobile support</h1>
            <p className='max-w-xs mx-auto font-bold text-slate-500'>Minimum latency viaour own DeskRT codec, Frame rates of 60 fps.</p>
                <div className="mt-5 ">
                    <a href="#" className='underline text-green-500 font-bold'>Learn More</a>
                </div>
            </div>

            <div className="text-center space-y-7 md:space-y-10 border border-transparent hover:border-green-500 max-w-xs xl:max-w-md mx-auto p-5 rounded-3xl duration-300 cursor-pointer">
            <svg className='mx-auto' width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.9437 65.5564C44.77 58.5898 39.3103 49.6504 44.4913 43.6261C45.3448 42.5768 46.4 41.7094 47.5946 41.075C48.7891 40.4406 50.0987 40.0523 51.446 39.9328C52.7933 39.8134 54.1508 39.9653 55.4383 40.3797C56.7258 40.794 57.9172 41.4623 58.9419 42.3451C59.9667 43.2279 60.804 44.3071 61.4044 45.5191C62.0047 46.7311 62.356 48.0512 62.4373 49.4013C62.5187 50.7514 62.3284 52.1041 61.8779 53.3794C61.4274 54.6547 60.7257 55.8267 59.8143 56.8261C57.3311 59.8964 54.1238 62.3015 50.4809 63.8254C46.8379 65.3493 42.8734 65.9441 38.9437 65.5564V65.5564Z" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M60.8667 45.0671L83.7137 14.8061C84.3279 13.9753 84.7633 13.0262 84.9921 12.0187C85.221 11.0112 85.2385 9.96721 85.0434 8.95261C84.8484 7.93801 84.4451 6.97488 83.859 6.12405C83.2728 5.27322 82.5167 4.55317 81.6382 4.00939C80.7597 3.4656 79.778 3.1099 78.755 2.96474C77.7321 2.81959 76.6902 2.88813 75.6951 3.16604C74.7 3.44396 73.7733 3.9252 72.9736 4.57938C72.1739 5.23356 71.5186 6.04647 71.049 6.96675L54.439 40.3921" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M27.709 62.59C8.27568 57.6657 15.895 47.498 7.33334 47.498C-3.79866 47.498 7.01068 73.0474 25.2707 82.533C30.3226 84.8973 35.9767 85.6603 41.4746 84.7199C46.9725 83.7794 52.0515 81.1804 56.0303 77.2714L56.3273 76.9707" stroke="#61C454" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <h1 className={`${mode ? "text-slate-100" : "text-slate-900"} text-4xl text-center max-w-sm`}>Flexibility & customization</h1>
            <p className='max-w-xs mx-auto font-bold text-slate-500'>Minimum latency viaour own DeskRT codec, Frame rates of 60 fps.</p>
                <div className="mt-5 ">
                    <a href="#" className='underline text-green-500 font-bold'>Learn More</a>
                </div>
            </div>
        </div>
        <div className="container mx-auto my-36">
            <div className="border"></div>
        </div>
    </>
  )
}

export default Client