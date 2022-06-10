const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  const {name, email, password} = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword
    });
    req.session.user = newUser;
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      }
    })
  } catch (e) {
    res.status(400).json({
      status: "fail",
      error: e.message,
    });
  }
}

exports.login = async (req, res) => {
  const { name, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({name});
    if(!user) {
      return res.status(404).json({
        status: 'fail',
        error: "User not found."
      })
    }
    const isValid = await bcrypt.compare(password, user.password);
    if(isValid) {
      req.session.user = user;
      return res.status(201).json({
        status: "success",
        data: {
          user
        }
      });
    } else {
      return res.status(404).json({
        status: "fail",
        error: "Invalid username or password.",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "fail",
      error: e.message,
    });
  }
};
