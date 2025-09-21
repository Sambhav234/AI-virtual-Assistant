import React, { useState } from 'react'
import ironman from '../assets/ironman2.jpg'
import { IoEyeSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,pass,email);
    }
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center'  style={{backgroundImage:`url(${ironman})`}}>
        <form className='w-[330px] h-[430px] max-w-[500px] bg-[#06060640] backdrop-blur shadow-lg shadow-black  flex flex-col items-center justify-center gap-[20px] px-[20px] rounded-3xl' onSubmit={handleSubmit}>
            <h1 className='text-white text-[20px] font-semibold mb-[15px]'> Register to  use <span className='text-blue-400'>Virtual Assistant</span></h1>
            <input type="text" placeholder='Enter Your Name' className='text-white w-full px-[20px] py-[20px] h-[35px] bg-transparent border-2 outline-none placeholder-gray-300 rounded-full' onChange={(e)=>setName(e.target.value)} value={name}/>
             <input type="email" placeholder='Enter Your email' className='text-white w-full px-[20px] py-[20px] h-[35px] bg-transparent border-2 outline-none placeholder-gray-300 rounded-full' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <div className='w-full h-[45px] border-2 border-white bg-transparent text-white rounded-full  relative'>
                <input type={showPassword?"text":"password"} className='text-white w-full h-full px-[20px] py-[20px]  outline-none placeholder-gray-300 rounded-full bg-transparent' placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)} value={pass}/>
                {!showPassword && <IoEyeSharp  className='absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>setShowPassword(true)}/>}
                {showPassword && <IoIosEyeOff  className='absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>setShowPassword(false)}/>}
            </div>
            <button className='text-black min-w-[100px] h-[45px] bg-white font-semibold rounded-full mt-[10px]'>Signup</button>
            <p className='text-[15px] font-semibold'>Already have an account ?<span className='text-blue-400 cursor-pointer' onClick={()=>navigate('/signin')}> Sign in</span></p>
        </form>
    </div>
  )
}
