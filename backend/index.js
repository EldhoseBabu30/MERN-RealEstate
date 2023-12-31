import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from'./routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors'
import cookieParser, { signedCookie } from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongoDB!');
}).catch((err)=>{
    console.log(err);
});
 
const app = express();

app.use(express.json());
app.use(cookieParser())

app.use(cors());

app.listen(3000,()=>{
    console.log("server running on port 3000"); 
}) 

app.use('/api/user', userRouter)
app.use('api/auth',authRouter)
app.use('api/listing',listingRouter)


//middleware to handle the error

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});