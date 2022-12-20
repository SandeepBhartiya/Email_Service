const mongoose=require('mongoose');
const {emailStatus}=require('../utils/constant')

const notificatioSchema=new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    recepientEmails:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    requester:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:emailStatus.unsent,
        enum:[emailStatus.sent,emailStatus.unsent],
        required:true
    }

},{versionKey:false,timestamps:true});

module.exports=mongoose.model("notification",notificatioSchema);