
import express from 'express';
import mongoose from 'mongoose';

//create user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
//create user model
const User = mongoose.model('User', userSchema);

export default User;
