import express from 'express'
const authrouter=express.Router()

authrouter.get('/',(req,res)=>{
    res.send('hello from server')
})

export default authrouter