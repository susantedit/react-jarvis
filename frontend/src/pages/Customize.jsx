import React, { useContext, useRef, useState } from 'react'
import Card from '../components/Card'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/authBg.png"
import image4 from "../assets/image4.png"
// import image5 from "../assets/image5.png"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import image8 from "../assets/ii.jpg"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.png"
import image11 from "../assets/image11.png"
import image12 from "../assets/image12.PNG"
import image13 from "../assets/image13.PNG"
import image14 from "../assets/image14.PNG"
import image15 from "../assets/image15.PNG"
import image16 from "../assets/image16.PNG"
import image17 from "../assets/image17.PNG"
import image18 from "../assets/image18.PNG"
import image22 from "../assets/image22.PNG"
import image23 from "../assets/image23.PNG"
import image19 from "../assets/image19.jpg"
import image20 from "../assets/with.png"
import image21 from "../assets/image21.jpg"
import { RiImageCircleAiLine } from "react-icons/ri";
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";
function Customize() {
  const {serverUrl,userData,setUserData,backendImage,setBackendImage,frontendImage,setFrontendImage,selectedImage,setSelectedImage}=useContext(userDataContext)
  const navigate=useNavigate()
     const inputImage=useRef()

     const handleImage=(e)=>{
const file=e.target.files[0]
setBackendImage(file)
setFrontendImage(URL.createObjectURL(file))
     }
  return (
    <div className='w-full h-[150vh] bg-gradient-to-b from-[#7226ff] via-[#160078] to-[#010030] flex justify-center items-center flex-col p-[20px] '>
        <IoArrowBackCircleOutline className='absolute top-[30px] left-[30px] text-white cursor-pointer w-[35px] h-[35px]' onClick={()=>navigate("/")}/>
        <h1 className='text-white mb-[40px] text-[30px] text-center '>Select your <span className='text-[#FF0000]'>Assistant Image</span></h1>
        <div className='w-full max-w-[1100px] flex justify-center items-center flex-wrap gap-[10px]'>
                <Card image={image11}/>
      <Card image={image1}/>
       <Card image={image2}/>
        <Card image={image3}/>
         <Card image={image4}/>
             <Card image={image9}/>
          {/* <Card image={image5}/> */}
           <Card image={image6}/>
           <Card image={image12}/>
            <Card image={image7}/>
              <Card image={image15}/>
            <Card image={image8}/>
            <Card image={image16}/>
              <Card image={image19}/>
              <Card image={image10}/>
              <Card image={image13}/>
              <Card image={image14}/>
              <Card image={image17}/>
              <Card image={image18}/>
              <Card image={image20}/>
              <Card image={image21}/>
              <Card image={image22}/>
              <Card image={image23}/>

     <div className={`w-[70px] h-[140px] lg:w-[80px] lg:h-[130px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage=="input"?"border-8 border-white shadow-2xl shadow-blue-950 ":null}` } onClick={()=>{
        inputImage.current.click()
        setSelectedImage("input")
     }}>
        {!frontendImage &&  <RiImageCircleAiLine className='text-white w-[25px] h-[25px]'/>}
        {frontendImage && <img src={frontendImage} className='h-full object-cover'/>}
    
    </div>
    <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage}/>
      </div>
{selectedImage && <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold cursor-pointer  bg-white rounded-full text-[19px] ' onClick={()=>navigate("/customize2")}>Next</button>}
      
    </div>
  )
}

export default Customize
