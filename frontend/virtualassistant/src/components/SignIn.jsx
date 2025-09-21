import React, { useState } from 'react'
import ironman from '../assets/ironman2.jpg'
import { IoEyeSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
export default function Signin() {
    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate();
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center'  style={{backgroundImage:`url(${ironman})`}}>
        <form className='w-[330px] h-[430px] max-w-[500px] bg-[#06060640] backdrop-blur shadow-lg shadow-black  flex flex-col items-center justify-center gap-[20px] px-[20px] rounded-3xl' >
            <h1 className='text-white text-[20px] font-semibold mb-[15px]'> Sign in to  use <span className='text-blue-400'>Virtual Assistant</span></h1>
             <input type="email" placeholder='Enter Your email' className='text-white w-full px-[20px] py-[20px] h-[35px] bg-transparent border-2 outline-none placeholder-gray-300 rounded-full'/>
            <div className='w-full h-[45px] border-2 border-white bg-transparent text-white rounded-full  relative'>
                <input type={showPassword?"text":"password"} className='text-white w-full h-full px-[20px] py-[20px]  outline-none placeholder-gray-300 rounded-full bg-transparent' placeholder='Enter Password' />
                {!showPassword && <IoEyeSharp  className='absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>setShowPassword(true)}/>}
                {showPassword && <IoIosEyeOff  className='absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>setShowPassword(false)}/>}
            </div>
            <button className='text-black min-w-[100px] h-[45px] bg-white font-semibold rounded-full mt-[10px]'>SignIn</button>
            <p className='text-[15px] font-semibold'>New to Assistant ?<span className='text-blue-400 cursor-pointer' onClick={()=>navigate('/signup')}> Sign Up</span></p>
        </form>
    </div>
  )
}
