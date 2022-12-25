const Notification=require('../models/notification.models');

const isEmailExist=async(req,res,next)=>{
    try
    {
        const query={};
        if(req.query.emailStatus)
        {
            query.emailStatus=req.query.emailStatus
        }

        if(req.query.subject)
        {
            query.subject=req.query.subject
        }
        const notification=await Notification.find(query);
        if(!notification.toString())
        {
            return res.status(400).send({
                message:"Failed!!! Email does not Exist"
            })
        }
        req.query=notification
        next();
    }
    catch(err)
    {
        res.status(500).send({
            message:" Internal server error"
        })
    }
}

const singleEmailExist=async(req,res,next)=>{
    try
    {
        const notification=await Notification.findOne({_id:req.params.id});
        if(!notification)
        {
            return res.status(400).send({
                message:"Failed!!! Email doesn't Exist"
            })
        }
        req.params=notification
        next();
    }
    catch(err)
    {

        res.status(500).send({
            message:"Internal server error while getting user"
        })
    }   
}
const authValidation={
    isEmailExist:isEmailExist,
    singleEmailExist:singleEmailExist
}

module.exports=authValidation