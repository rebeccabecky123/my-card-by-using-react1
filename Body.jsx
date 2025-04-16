import React from 'react'
import image from './image.jpg'
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const Body = () => {
  return (

    <div className='  h-screen flex flex-col justify-center items-center  '>
        <div className=' rounded-3xl  bg-fuchsia-200 py-10 px-10 shadow-2xl'>
        <img src={image} alt=""  className='h-30  w-40 rounded-3xl mx-auto'/>
        <h1 className='text-2xl mt-5 font-bold'>Byamungu Rebecca</h1>
        <p className='mt-2 text-blue-500 font-semibold'>Frontend Developer </p>
        <p className='text-gray-600 mt-2 '>
            Passionate about creating elegant solution through code. 2 + years of experience in Frontend Developer
        </p>
        <div className=' flex items-center justify-center mt-5   '>
        <CiLinkedin className=''/> 
        <TfiEmail className='mx-6' />
        <FaGithub />
        <FaSquareXTwitter className='mx-4'/>
        </div>
        <button className='text-gray-200 font-bold mt-2 bg-blue-500 rounded-3xl py-1 px-4 hover:bg-black cursor-pointer'>Click to see details</button>
        <h1 className=' text-2xl text-blue-500 font-semibold mt-3'>Contact Details</h1>
        </div>
        
      
    </div>
    
  )
}

export default Body;