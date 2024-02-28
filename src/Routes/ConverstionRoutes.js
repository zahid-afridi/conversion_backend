import express from 'express'
import { AddConverstino,getConversationBetweenUsers,getconversion } from '../Controllers/Converstion.js'


const converstinRoutes=express.Router()
converstinRoutes.post('/addconversino',AddConverstino)
converstinRoutes.get('/getconversion/:userId',getconversion)
converstinRoutes.get('/getconversion/:userId1/:userId2', getConversationBetweenUsers);



export default converstinRoutes