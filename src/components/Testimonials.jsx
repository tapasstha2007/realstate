import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    
    className='lg:p-20 p-5' id='Testimonial'>
        <div className="text-center mt-20 ">
        <h1 className="font-bold text-4xl">
          Customer <span className="underline font-light">Testimonials</span>
        </h1>
        <p className="opacity-70 mt-3">
          Read Story From Those Who Found Home  <br />
          <span>with Us</span>
        </p>
      </div >
      <div className='flex items-center justify-center gap-10 mt-10 flex-wrap'>
    {testimonialsData.map((item, index) => (  
    <div key={index} className='flex flex-col items-center justify-center gap-5 bg-white shadow-lg rounded-lg p-5 w-[300px] h-[400px]'>
        <div className='flex flex-col items-center justify-center gap-2'>
            <img src={item.image}/>
            <h2>{item.name}</h2>
            <p className='opacity-75'>{item.title}</p>
        </div>
        
        <div className='flex'>
         {
         Array.from({length: item.rating},(_, i) => (
          <img key={i} src={assets.star_icon} alt="Star"  />
         ))
         }
        </div>

        <p className="text-center">{item.text}</p>
    </div>
    ))}

    </div>
    </motion.div>
  )
}

export default Testimonials