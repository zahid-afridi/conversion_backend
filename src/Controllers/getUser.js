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
  const SingleUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const existingUser = await User.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      res.status(200).json({ success: true, user: existingUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  export {GetUser,SingleUser}