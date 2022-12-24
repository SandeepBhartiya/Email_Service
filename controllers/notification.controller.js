const Notification=require('../models/notification.models')

exports.createEmail=async(req,res)=>{
    const emailObj={
        subject:req.body.subject,
        content:req.body.content,
        recepientEmails:req.body.recepientEmails,
        requester:req.body.requester
    }
    
    try
    {
        const notification= await Notification.create(emailObj);
        console.log("#### Notification sucessfully created ####")
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



exports.getNotification=async(req,res)=>{
    try
    {
        const query={};
        if(req.query.emailStatus)
        {
            query.emailStatus=req.query.emailStatus
        }
        if(req.body.subject)
        {
            query.subject=req.query.subject
        }
        if(req.body._id)
        {
            query._id=req.query._id
        }

        const notification=await Notification.find(query)
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