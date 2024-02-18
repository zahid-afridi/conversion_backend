import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    username:{
    type:String
    },
    password:{
        type:String
    },
    

},  {
    timestamps: true
  })

  export default mongoose.model('User', userSchema);