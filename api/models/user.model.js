import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7H9c5Fgcx_4WRTw257w0h7ij8ptu2zquXwWEySw&s"
    }
}, {timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;

