import User from '../Models/authModels.js'

const GetUser=async(req,res)=>{
    try {
      const users = await User.find();
      res.status(200).json({ success: true, users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  export {GetUser}