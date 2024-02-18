import express from 'express'
import dotenv from 'dotenv'
// import authrouter from './Routes/authRoutes.js'
dotenv.config()
const port=process.env.PORT
const app=express()
app.use(express.json())
// app.use('/api/auth',authrouter)
app.use('/',(req,res)=>{
    res.send('hy')
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})