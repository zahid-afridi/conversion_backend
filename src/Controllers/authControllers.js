import User from '../Models/authModels.js'


const Register=async(req,res)=>{
  try {
    const {username,password}=req.body

    const exitingUser= await User.findOne({username})
    if (exitingUser) {
    return res.status(404).json({success:false,message:"User already exitie"})
    }
    const newUser= new User({username,password})
    await newUser.save()
    res.status(200).json({success:true,message:"user register succefful"})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"internal server eror"})

  }
}




const login=async(req,res)=>{
 res.send('hello from server')
}

export {login,Register}