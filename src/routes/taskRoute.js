import express from 'express';
import Task from '../models/task.model.js';
import { createTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from '../controllers/taskController.js';
import { protect } from '../middlewares/authMiddleware.js';




const taskRouter = express.Router();

taskRouter.use(protect );

taskRouter.post("/create",createTask)

taskRouter.get("/",getAllTasks)
taskRouter.get("/:id",getTaskById)
taskRouter.put("/:id",updateTaskById)
taskRouter.delete("/:id",deleteTaskById)
export default taskRouter;

