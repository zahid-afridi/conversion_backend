// import User from '../Models/authModels.js';
// import bcrypt from 'bcryptjs'; // Assuming you are using bcrypt for password hashing
// import jwt from 'jsonwebtoken'; // Assuming you are using JWT for authentication

// const Register = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const existingUser = await User.findOne({ username:username });
//     if (existingUser) {
//       return res.status(409).json({ success: false, message: "Username already exists" });
//     }

//     const newUser = new User({ username, password });
//     await newUser.save();
//     res.status(201).json({ success: true, message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ success: false, message: "Authentication failed. User not found." });
//     }

//     // const isPasswordValid = await bcrypt.compare(password, user.password);
//     // if (!isPasswordValid) {
//     //   return res.status(401).json({ success: false, message: "Authentication failed. Invalid password." });
//     // }
//     if (user.password !== password) {
//       return res.status(401).json({ success: false, message: "Authentication failed. Invalid password." });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' }); // Replace 'your_secret_key' with your actual secret key

//     res.status(200).json({ success: true, message: "Authentication successful", token,user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// export { login, Register };

import User from '../Models/authModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Username already exists" });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ success: false, message: "Authentication failed. User not found." });
    }


    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Authentication failed. Invalid password." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' }); // Replace 'your_secret_key' with your actual secret key

    res.status(200).json({ success: true, message: "Authentication successful", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export { login, Register };

