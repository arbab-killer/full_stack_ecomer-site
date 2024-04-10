import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:false,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    wishlist :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
   ,
    cart :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        default: ''
    }
},{timestamps:true})

const User = mongoose.model('User', userSchema)
export default User