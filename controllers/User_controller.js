const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User_Schema");
const wrapAsyc = require("../utils/wrapAsyc");

const signup = wrapAsyc(async (req, res) => {
  let { username, email, password } = req.body;
  let users = await User.findOne({ email: email });
  if (!users) {
    bcrypt.hash(password, 10, async (err, hash) => {
      let obj = {
        username: username,
        email: email,
        password: hash,
      };
      console.log(password);

      let val = await User.create(obj);
      res.status(200).json({ msg: "created successfully ", data: val });
    });
  } else {
    res.status(400).json({ msg: "This Email'id Already Exists" });
  }
});

const login = wrapAsyc(async (req, res) => {
  const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "password not match" });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' });
        res.cookie("token", token);
        res.status(200).json({ token, userId: user._id });
      }
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
});

module.exports = { signup, login };
