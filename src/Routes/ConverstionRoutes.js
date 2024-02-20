import express from 'express'
import { AddConverstino,getconversion } from '../Controllers/Converstion.js'


const converstinRoutes=express.Router()
converstinRoutes.post('/addconversino',AddConverstino)
converstinRoutes.get('/getconversion/:userId',getconversion)



export default converstinRoutes