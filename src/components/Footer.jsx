import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 flex justify-between px-15 lg:px-25 py-10 text-zinc-400 flex-col gap-10'>
        <div className='flex gap-10 md:flex-row flex-col'>
            <div className='flex flex-col gap-5 w-full md:w-1/3'>
                <div>
                <img src={assets.logo_dark}/>
                
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tempora corporis, adipisci laudantium, esse voluptatibus, reiciendis</p>

            </div>
            <div className='flex flex-col gap-5 w-full md:w-1/3  md:text-center'>
                <h1 className='text-white font-bold'>Company</h1>
                <ul className='flex flex-col gap-2'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <div className='flex flex-col gap-5 w-full md:w-1/3'>
                <h1 className='font-bold text-white'>Subscribe to our Newsletter</h1>
                <p>The latest news, article and resources sent to your inbox weekly</p>
                <div className='flex gap-2 flex-wrap lg:flex-nowrap'>
                    <input type="text" placeholder='Your Email' className='border border-gray-400 text-gray-400 pr-20 py-3 rounded p-2'/>
                    <button className='text-white bg-blue-800 px-8 rounded'>Subscribe</button>
                </div>
            </div>
        </div>
        <div>
            <hr />
            <p className='text-center mt-5'>Copyright 2026 © TapasStha. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer