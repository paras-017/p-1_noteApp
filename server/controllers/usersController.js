const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 

const signup =async (req,res)=>{
    try {
        const {email, password} = req.body
    const hashPassword =await  bcrypt.hash(password, 8)
   const user = await User.create({email, password:hashPassword})
   res.status(200).json({user})
    } catch (err) {
        console.log(err)
       res.sendStatus(400)
    }
}

const login =async (req,res)=>{
    try {
        
    // validating
   const {email, password} = req.body
   const user = await User.findOne({email})
   if(!user) res.status(401)

 // comparing password 
   const passwordMatch = await bcrypt.compare(password, user.password)
   if(!passwordMatch) res.status(401)

   // creating Token
   const token = jwt.sign({sub:user._id}, process.env.SECRET)
   
   //    Set the cookie 
   res.cookie("Authorization", token,{
    expires  : new Date(Date.now() + 1000*60*60*24*30),
    httpOnly:true,
    sameSite:"lax",
    secure:process.env.NODE_ENV === 'production',
   })
   res.send()
   res.status(200)
//    res.status(200).send({ user, token: jwt.token })
    } catch (err) {
        console.log(err)
        res.sendStatus(401)
    }
}

const checkAuth = async (req,res)=>{
   try {
    res.sendStatus(200)
   } catch (error) {
    console.log(error)
    res.sendStatus(401)
   }
}

const logout = (req,res)=>{
   try {
    res.clearCookie('Authorization')
    res.sendStatus(200)
   } catch (err) {
    console.log(err)
        res.sendStatus(400)
   }
}

module.exports = {signup, login, logout, checkAuth}