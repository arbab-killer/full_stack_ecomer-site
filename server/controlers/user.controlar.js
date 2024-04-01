import bycrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../servesies/jwtcontrlar.js";
const userSignup = async (req, res) => {
  const { name, email, password ,phone,address } = req.body;
  if (!(name && email && password && phone)) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    //check if user exist
    const user = await User.findOne({ email }).select("-isAdmin -password");
    if (user) {
      return res.status(409).json({
        success: false,
        message: "User already exist",
      });
    }
    //hash password
    const hashedPassword = await bycrypt.hash(password, 10);
    //save user in db
    const newuser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await newuser.save();
    //jwt
    const token = generateToken(newuser);

    const dbuser = await User.findOne({ email }).select("-isAdmin -password");
    if (dbuser) {
      return res.status(201).json({
        success: true,
        message: "User created successfully",
        data: dbuser,
        token: "token " + token,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const userLogin = (req, res) => {};
const userdetails = (req, res) => {
  const {name,email, phone,address,wishlist,cart,isAdmin}  =  req.user
  return res.status(200).json({success: true, message:"fetchUserDetails" ,
    name,
    email,
    phone,
    address,
    email,
    cart,
    isAdmin,
    wishlist,

  })
};
export { userSignup, userLogin, userdetails };
