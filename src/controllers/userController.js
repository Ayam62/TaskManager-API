import express from 'express';
import User from '../models/user.model.js';

//actual function to get current user
export const getCurrentUser = (req, res) => {
    res.status(200).json({
        message: "Current user",
        user: req.user,
    });
};
//actual function to update user
export const updateUser = async (req,res)=>{
    try{
        const {name,email}=req.body;
        //check if user exists
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
        //update user
        user.name=name;
        user.email=email;
        await user.save();
        res.status(200).json({message:"User updated successfully"});
    }
    catch(error){
        res.status(500).json({message:"Error updating user"});
    }
}
//function to delete user
export const deleteUser =async(req,res)=>{
    try{
        const user =await User.findById(req.user._id);
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
        //delete user
        await user.remove();
        res.status(200).json({message:"User deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:"Error deleting user"});
    }
}

