const Notification=require('../models/notification.models')

exports.acceptNotification=async(req,res)=>{
    const emailObj={
        subject:req.body.subject,
        content:req.body.content,
        recepientEmails:req.body.recepientEmails,
        requester:req.body.requester
    }
    
    try
    {
        const notification= await Notification.create(emailObj);
        console.log("#### Notification successfully created ####")
        res.status(201).send(notification);
    }
    catch(err)
    {
        console.log("Error while creating notification",err.message);
        res.status(500).send({
            message:"Internal server error while creating Notification"
        })
    }
}



exports.getAllNotification=async(req,res)=>{
    try
    {
        const notification=req.query;
        res.status(200).send(notification)
    }
    catch(err)
    {
        console.log("error while getting email",err.message);
        res.status(500).send({
            message:"Internal server error while getting email"
        })
    }
}


exports.getSingleNotification=async(req,res)=>{
    try
    {
        const notification=req.params;
        res.status(200).send(notification)
    }
    catch(err)
    {
        console.log("error while getting email",err.message);
        res.status(500).send({
            message:"Internal server error while getting email"
        })
    }
}