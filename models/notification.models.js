const mongoose=require('mongoose');
const {emailStatus}=require('../utils/constants')
const emailSchema=new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    recepientEmails:{
        type:String,
        required:true
    },
    requester:{
        type:String,
        required:true
    },
    emailStatus:{
        type:String,
        required:true,
        default:emailStatus.unsent,
        enum:[emailStatus.sent,emailStatus.unsent]
    }
},{timestamps:true,versionKey:false});

module.exports=mongoose.model("notification",emailSchema)