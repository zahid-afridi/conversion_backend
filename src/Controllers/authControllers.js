import User from '../Models/authModels.js';

const Register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
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
      const users = await User.find();
      res.status(200).json({ success: true, users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

export { login, Register };
