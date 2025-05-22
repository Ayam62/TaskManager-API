import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getCurrentUser, updateUser,deleteUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.use(protect)

userRouter.get('/current',getCurrentUser);

userRouter.put('/update',updateUser);
userRouter.delete('/delete',deleteUser);
export default userRouter;