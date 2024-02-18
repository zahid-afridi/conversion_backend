import express from 'express'
import dotenv from 'dotenv'
import authrouter from './src/Routes/authRoutes.js'
dotenv.config()
const port=process.env.PORT
const app=express()
app.use(express.json())
// app.use('/api/auth',authrouter)
app.use('/',(req,res)=>{
    res.send('hy')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})