import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    try {
        return jwt.sign(
            {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        return  {
            fail :"fail to genrate token"
        }
    }
}
