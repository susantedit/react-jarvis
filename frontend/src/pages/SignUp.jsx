/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import bg from "../assets/siggnin.gif"
import { FaMehRollingEyes } from "react-icons/fa";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/UserContext';
import axios from "axios"
function SignUp() {
  const [showPassword,setShowPassword]=useState(false)
  const {serverUrl,userData,setUserData}=useContext(userDataContext)
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
    const [loading,setLoading]=useState(false)
    const [password,setPassword]=useState("")
const [err,setErr]=useState("")
  const handleSignUp=async (e)=>{
    e.preventDefault()
    setErr("")
    setLoading(true)
try {
  let result=await axios.post(`${serverUrl}/api/auth/signup`,{
    name,email,password
  },{withCredentials:true} )
 setUserData(result.data)
  setLoading(false)
  navigate("/customize")
} catch (error) {
  console.log(error)
  setUserData(null)
  setLoading(false)
  setErr(error.response.data.message)
}
    }
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage:`url(${bg})`}} >
 <form className='w-[90%] h-[600px] max-w-[500px] rounded-[60px] bg-[#00000062] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]' onSubmit={handleSignUp}>
<h1 className='text-[#FF0000] text-[25px] font-semibold mb-[30px]'>
                    SignUp
                    <span className='text-white text-[30px] text-weight-bold'> TO Vortex </span>
                    <span className=' text-blue-400'> Virtual Assistant</span>
                </h1>


<input type="text" placeholder='Enter your Name' className='w-full h-[60px] outline-none border-2 border-white bg-transparent  text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e)=>setName(e.target.value)} value={name}/>
<input type="email" placeholder='Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent  text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
<div className='w-full h-[60px] border-2 border-white bg-transparent  text-white rounded-full text-[18px] relative'>
<input type={showPassword?"text":"password"} placeholder='password' className='w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[10px]' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
{!showPassword && <PiSmileyXEyesFill className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white] cursor-pointer' onClick={()=>setShowPassword(true)}/>}
  {showPassword && <FaMehRollingEyes className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white] cursor-pointer' onClick={()=>setShowPassword(false)}/>}
</div>
  {err.length>0 && <p className=' text-red-500 font-semibold text-[17px]  mt-[30px] text-center px-4 py-1 rounded-full bg-gray-400/30 backdrop-blur-sm '>
                      *{err}
                    </p>}
<button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold  bg-white rounded-full text-[19px] ' disabled={loading}>{loading?"Loading...":"Sign Up"}</button>

<p className='text-[white] text-[18px] cursor-pointer' onClick={()=>navigate("/signin")}>Already have an account ? <span className='text-blue-400'>Sign In</span></p>
 </form>
    </div>
  )
}

export default SignUp
