import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#fdfdfd] mt-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 gap-5 container mx-auto py-10 ft">
            <div className="flex flex-col gap-4 items-start">
                <img className='h-10' src="/assets/logo.svg" alt="" />
                <div className="flex gap-2 items-start">
                    <img src="/assets/email.svg" alt="" />
                    <p className='text-md font-medium'>help@rownok.com</p>
                </div>
                <div className="flex gap-2 items-start">
                    <img src="/assets/phone.svg" alt="" />
                    <p className='text-md font-medium'>+88018763646353</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
               <p className='text-3xl font-semibold'>Links</p>
               <p className='text-xl font-medium'>Home</p>
               <p className='text-xl font-medium'>About</p>
               <p className='text-xl font-medium'>Booking</p>
               <p className='text-xl font-medium'>Blog</p>
            </div>
            <div className="flex flex-col gap-4 items-start">
               <p className='text-3xl font-semibold'>Legal</p>
               <p className='text-xl font-medium'>Terms Of Use</p>
               <p className='text-xl font-medium'>Privacy Policy</p>
               <p className='text-xl font-medium'>Cookie Policy</p>
               <p className='text-xl font-medium'>Blog</p>
            </div>
            <div className="flex flex-col gap-4 items-start">
               <p className='text-3xl font-semibold'>Product</p>
               <p className='text-xl font-medium'>Take Tour</p>
               <p className='text-xl font-medium'>Live Chat </p>
               <p className='text-xl font-medium'>Reviews</p>
         
            </div>
            <div className="flex flex-col gap-4 items-start">
               <p className='text-3xl font-semibold'>News Letter</p>
               <p className='text-xl font-medium'>Stay Up To Date</p>
           <div className="flex items-start flex-col gap-2">
            <input type="text" className='px-3 py-3 bg-white' placeholder='Your email'/>
            <button className='bg-black w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-primary btnfooter'>Subscribe</button>
           </div>
            </div>
        </div>
        <br />
         <div id='hline'>
         <div>
            <img src="/images/footerline.png" alt="" className='line'/>
            <div className='text'>
            <p className='footertext'>Copyright 2024 urif.com All Rights Reserved</p>
            </div>
            </div>
         </div>
         <br/>
    </div>
  
  )
}

export default Footer