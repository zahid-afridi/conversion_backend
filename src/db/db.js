import mongoose from 'mongoose'

const dbcon=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log('MONGODB ID CONNTECT')
    } catch (error) {
        console.log(error)
    }
}

export default dbcon