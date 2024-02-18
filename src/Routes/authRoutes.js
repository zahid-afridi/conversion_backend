import express from 'express'
import { login } from '../Controllers/authControllers.js'
const authrouter=express.Router()

authrouter.post('/login',login)

export default authrouter