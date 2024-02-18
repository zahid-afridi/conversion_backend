import express from 'express'
import dotenv from 'dotenv'
import authrouter from './Routes/authRoutes.js'
import dbcon from './db/db.js'
import cors from 'cors'
dotenv.config()
const port=process.env.PORT
const app=express()
app.use(express.json())
dbcon()
app.use('/api/auth',authrouter)
app.use(cors())
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next()
  });
  

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


export default app;