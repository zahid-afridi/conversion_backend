import express from 'express'
import dotenv from 'dotenv'
import authrouter from './Routes/authRoutes.js'
dotenv.config()
const port=process.env.PORT
const app=express()
app.use(express.json())
// dbcon()
app.use('/api/auth',authrouter)
import dbcon from './db/db.js'

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})