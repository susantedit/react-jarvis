import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp=async (req,res)=>{
try {
    const {name,email,password}=req.body

    const existEmail=await User.findOne({email})
    if(existEmail){
        return res.status(400).json({message:"Are you mad ? THis Email already exist ! Use your brain and try anothoer one ! you foolish human"})
    }
    if(password.length< 8){
        return res.status(400).json({message:"Are you dumb or stupid ?!  Password mustbe at least a 8 characters long ! its not a toy , gadhe!"})
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const user=await User.create({
        name,password:hashedPassword,email
    })

    const token=await genToken(user._id)

    res.cookie("token",token,{
        httpOnly:true,
       maxAge:30*24*60*60*1000,
       sameSite:"None",
       secure:true
    })

    return res.status(201).json(user)

} catch (error) {
       return res.status(500).json({message:`🚫 Sign-up error: ${error} — Bro, even a potato could've done this better. Fix your form and come back when you're ready to act like a functioning human.`})
}
}

export const Login=async (req,res)=>{
try {
    const {email,password}=req.body

    const user=await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"Are you mad ? THis Email already exist ! Use your brain and try anothoer one ! you foolish human"})
    }
   const isMatch=await bcrypt.compare(password,user.password)

   if(!isMatch){
   return res.status(400).json({message:"Wrong password ? Bro, are you dumb or just allergic to remembering things? How many times you gonna fail before your brain starts working? Even the keyboard wants to resign!"})
   }

    const token=await genToken(user._id)

    res.cookie("token",token,{
        httpOnly:true,
       maxAge:30*24*60*60*1000,
      sameSite:"None",
       secure:true
    })

    return res.status(200).json(user)

} catch (error) {
       return res.status(500).json({message:`💀 Login Failed: ${error} —
"How do you mess up logging into your own account? This ain’t rocket science. Either remember your details or stop wasting server space."`})
}
}

export const logOut=async (req,res)=>{
    try {
        res.clearCookie("token")
         return res.status(200).json({message:"Logout failed : ${error}! Are you mad?   Stop acting like a clown and fix it, fool!"})
    } catch (error) {
         return res.status(500).json({message:`logout error ${error}`})
    }
}
        
