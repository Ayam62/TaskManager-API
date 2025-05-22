

import Task from '../models/task.model.js';
import User from '../models/user.model.js';
import mongoose from 'mongoose';


export const createTask= async (req,res)=>{
    try{
        const {title,description}=req.body;
        //check if user exists
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
        //create task
        const task = new Task({
            title,
            description,
            user:req.user._id
        })
        //save task
        await task.save();
        res.status(201).json({message:"Task created successfully"});
    }catch(error){
         console.error(error);
        res.status(500).json({message:"Error creating task"});
    }
}

export const getAllTasks= async (req,res)=>{
    try{
        //get all tasks
        const tasks= await Task.find({user:req.user._id});//find all the tasks of the user
        if(!tasks){
            return res.status (400).json({message:"Hurray! You have no tasks to do."})
        }
        res.status(200).json(tasks);


    }catch(error){
        res.status(500).json({message:"Error getting tasks"});
    }
}


export const getTaskById= async (req,res)=>{
    try{
        const {id}=req.params;//url mai id hunxa so we get it from params
        //check if task exists.....jailey exist garxa ki gardaina bhanera check garna parcha
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:"Invalid task id"});
        }
        const task= await Task.findById(id);
        if(!task){
            return res.status(400).json({message:"Task does not exist"});
        }
        //check if task belongs to user
        if(task.user.toString() !== req.user._id.toString()){
            return res.status(400).json({message:"You are not authorized to view this task"});
        }
        res.status(200).json(task);


    }catch(error){
        res.status(500).json({messsage:"Error getting task"});
    }
}

export const updateTaskById = async(req,res)=>{
try{
    const {id}=req.params;
    const {title,description,completed}=req.body;//fetch the data from the body given by user(this is the data we need to update with(final data))
    //check if task exists
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json ({message:"Invalid task id"});
    }
    const task =await Task.findById(id);
    if(!task){
        return res.status(400).json({message:"Task does not exist"});
    }
    //check if task belongs to user
    if(task.user.toString()!== req.user._id.toString()){
        return res.status(400).json({message:"You are not allowed to update this task"});

    }
    //update task
    task.title =title;
    task.description= description;
    task.completed= completed;
    await task.save();
    res.status(200).json({message:"Task updated successfully"});
}catch(error){
    res.status(500).json({message:"Error updating task"});
}
}

export const deleteTaskById=async (req,res)=>{
    const {id}=req.params;
    try{
        //check if task exists of that given id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:"Invalid task id"});
        }
        const task = await Task.findById(id);
        if(!task){
            return res.status(400).json({message:"Task does not exist"});
        }
        //check if that task belongs to this user who is trying to delete it
        if(task.user.toString()!== req.user._id.toString()){
            return res.status(400).json({message:"You are not allowed to delete this task"});
        }
        //finally everything is fine so we can delete the task
        await Task.findByIdAndDelete(id);
        res.status(200).json({message:"Task deleted successfully"});


    }catch(error){
        res.status(500).json({message:"Errror deleting the task"});
    }
}