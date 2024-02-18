import mongoose from 'mongoose';

const dbcon = async () => {
    try {
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
           
        });
       
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.log(error);
    }
};

export default dbcon;
