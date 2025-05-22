import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoute.js';
import { protect } from './middlewares/authMiddleware.js';
import userRouter from './routes/userRoute.js';

const app=express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(protect)
app.use("/api/auth", authRouter)
app.use("/api/task", taskRouter)
app.use("/api/user", userRouter)


connectDB();

app.get('/', (req, res) => {
  res.send('hello world')
})
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

//connect to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})



