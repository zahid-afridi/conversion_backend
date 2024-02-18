import express from 'express'
import { Register, login } from '../Controllers/authControllers.js'
const authrouter=express.Router()
authrouter.post('/register',Register)
authrouter.post('/login',login)

export default authrouter