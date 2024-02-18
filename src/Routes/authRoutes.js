import express from 'express'
import { Register, login } from '../Controllers/authControllers.js'
const authrouter=express.Router()
// authrouter.post('/register',Register)
// authrouter.post('/login',login)

authrouter.get('/',(req,res)=>{
    res.send("working")
})

export default authrouter