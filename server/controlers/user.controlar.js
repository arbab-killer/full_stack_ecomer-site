import bycrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../servesies/jwtcontrlar.js";
const userSignup = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  if (!(name && email && password && phone && address)) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  //check if user exist
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        success: false,
        message: "User already exist",
      });
    }
  } catch (error) {
    return res.status(409).json({
      success: false,
      UserAllready: " User AllReadyExised " + error.message,
    });
  }

  try {
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

    const dbuser = await User.findOneAndUpdate(
      { email },
      { $set: { token } }
    ).select("-isAdmin -password");
    if (dbuser) {
      return res.status(201).json({
        success: true,
        message: "User created successfully",
        token: "token " + token,
        user: dbuser,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error" + error.message,
    });
  }
};

//login controller
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!(email, password)) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })}
    const matchpassword =await bycrypt.compare(password, user.password);
    console.log(matchpassword);
    if (!matchpassword) {
      return res.status(409).json({
        success: false,
        message: "Password or email is incorrect",
      })
    }

    return res.status(200).json({
      success: true,
      message: "User login successfully",
      token: "token " + user.token,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error" + error.message,
    });
  }
};

const userdetails = (req, res) => {
  const { name, email, phone, address, wishlist, cart, isAdmin } = req.user;
  return res.status(200).json({
    success: true,
    message: "fetchUserDetails",
    name,
    email,
    phone,
    address,
    email,
    cart,
    isAdmin,
    wishlist,
  });
};
export { userSignup, userLogin, userdetails };
