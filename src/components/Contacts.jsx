import React from 'react'
import { motion } from 'motion/react';

const Contacts = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "82467e3f-897f-4b3f-aa51-70a89e70c498");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        event.target.reset();
        alert("Form Submitted Successfully")

      } else {
        console.log("Error", data);
        alert("Error", data.message)
        setResult(data.message);

      }
    };
  return (
    <motion.div className='p-10'
    initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}>
      <div className="text-center mt-7">
        <h1 className="font-bold text-4xl">
          Contact  <span className="underline font-light">With Us</span>
        </h1>
        <p className="opacity-70 mt-3">
         Ready To Make A Move?Lets Build Your <br />
          <span>Future Together</span>
        </p>
      </div>
<form onSubmit={onSubmit}>
      <div>
        <div className='flex  gap-4 mt-10 justify-center flex-wrap'>
            <div className='flex flex-col gap-2 mt-10'>
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder="Your Name" name="name" id="name" className='border border-gray-400 text-gray-400 pr-20 py-3 rounded p-2'/>
            </div>
            <div className='flex flex-col gap-2 mt-10'>
                <label htmlFor="Email"> Your Email</label>
                <input type="text" placeholder="Your Email" name="Email" id="Email" className='border border-gray-400 text-gray-400 pr-20 py-3 rounded p-2 '/>
            </div>
        </div>
        <div className='flex  gap-4  justify-center'>
        <div className='flex flex-col mt-5 gap-2 '>
                <label htmlFor="Message"> Message</label>
                <input type="text" placeholder="Message" name="Message" id="Message" className='border border-gray-400 text-gray-400 pr-20 md:pr-95 pb-40 rounded p-2 '/>
            </div>
            </div>
            
        </div >
        <div className='flex justify-center mt-5'>
            <button type='submit' className='bg-blue-700 text-white px-8 py-2 rounded'>{result?result:"Send Message"}</button>
            </div>
            </form>
    </motion.div>
    
  )
}

export default Contacts