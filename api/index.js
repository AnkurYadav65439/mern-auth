import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
// import cors from 'cors'
import cookieParser from "cookie-parser"
import path from 'path'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
})

//this will find dynamic directory name (deploy)
const __dirname = path.resolve();

const app =express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})
//sends index.html to the client from 'dist' folder from server

app.use(express.json());

//for cors error while using fetch api and add note
// app.use(cors())

app.use(cookieParser());

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`);
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/auth", authRoutes);

//middleware for error 
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
})