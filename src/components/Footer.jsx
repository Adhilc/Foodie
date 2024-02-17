import React from 'react'
import twitter from "../assets/twitter.png"
import whatsapp from "../assets/whatsapp.png"
import instagram from "../assets/instagram.png"



export default function Footer() {
  return (
    <div className=' p-4 py-12'>
        <div className='bg-gray-200 text-black items-center'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-6 p-10'>
                <div className='flex flex-col'>
                    <h4 className='font-bold text-orange-500 md:text-lg'>For Business</h4>
                    <a className='mt-3' href='/employer'><p>Employer</p></a>
                    <a className='mt-3' href='/healthplan'><p>Health Plan</p></a>
                    <a className='mt-3' href='/individual'><p>Individual</p></a>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-bold text-orange-500 md:text-lg'>Resources</h4>
                    <a className='mt-3' href='/resources'><p>Resource center</p></a>
                    <a className='mt-3' href='/resources'><p>Testimonials</p></a>
                    <a className='mt-3' href='/resources'><p>STV</p></a>
                </div> 
                <div className='flex flex-col'>
                    <h4 className='font-bold text-orange-600 md:text-lg'>Parterns</h4>
                    <a className='mt-3' href='/partners'><p>Swiggy</p></a>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-bold text-orange-500 md:text-lg'>Company</h4>
                    <a className='mt-3' href='/About'><p>About</p></a>
                    <a className='mt-3' href='/Contact'><p>Contact</p></a>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-bold text-orange-500 md:text-lg'>Coming soon on</h4>
                    <div className='grid grid-cols-3 gap-0 mt-5'>
                        <p><img className='w-8 block cursor-pointer' src={whatsapp} alt="whatsapp" /></p>
                        <p><img className='w-8 cursor-pointer' src={instagram} alt="instagram" /></p>
                        <p><img className='w-8 cursor-pointer' src={twitter} alt="twitter" /></p>
                    </div>
                </div>
            </div>
            <hr className='border-black'></hr>
            <div>
                <div className='p-4 py-12'>
                    <p className='text-black'>@{new Date().getFullYear()} GrubHub. All right reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
