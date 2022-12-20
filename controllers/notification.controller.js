const Notification=require('../models/notification.model');

exports.createNotification=async(req,res)=>{
    try
    {
        const notiObj={
            subject:req.body.subject,
            recepientEmails:req.body.recepientEmails,
            content:req.body.content,
            requester:req.body.requester
        }
        const notification=await Notification.create(notiObj);
        console.log(`#### Notification ${notification.subject} Created ####`)
        res.status(201).send(notification);
    }
    catch(err)
    {
        console.log("#### Error while creating notification ####",err.message)
        res.status(500).send({
            message:"Internal server error while creating notification"
        });
    }
}

exports.getNotification=async(req,res)=>{
    try
    {
        const notification=await Notification.findOne({_id:req.params.id});
        res.status(200).send(notification)
    }
    catch(err)
    {
        console.log("#### Error while getting notification ####",err.message)
        res.status(500).send({
            message:"Internal server error while getting notification"
        });
    }
}