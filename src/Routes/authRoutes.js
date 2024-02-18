import express from 'express'
import { Register, login } from '../Controllers/authControllers.js'
import { GetUser } from '../Controllers/getUser.js'
const authrouter=express.Router()
authrouter.post('/register',Register)
authrouter.post('/login',login)
authrouter.get('/get-user',GetUser)

export default authrouter