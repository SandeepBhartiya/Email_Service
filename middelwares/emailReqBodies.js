
const isvalidEmail=(value)=>{
    return String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

const emailValidation=async(req,res,next)=>{
    
    if(!req.body.subject)
    {
        return res.status(400).send({
            message:"Failed!!! subject is not provided"
        });
    }
    else if(typeof req.body.subject!=="string")
    {
        return res.status(400).send({
            message:"Failed!!! subject value provided is not in a valid formate(String)"
        });
    }

    if(!req.body.content)
    {
        return res.status(400).send({
            message:"Failed!!! content is not provided"
        });
    }
    else if(typeof req.body.content!=="string")
    {
        return res.status(400).send({
            message:"Failed!!! content value provided is not in a valid formate(String)"
        });
    }

    if(!req.body.recepientEmails)
    {
        return res.status(400).send({
            message:"Failed!!! recepientEmails is not provided"
        });
    }
    else if(typeof req.body.recepientEmails!=="string")
    {
        return res.status(400).send({
            message:"Failed!!! recepientEmails value provided is not in a valid formate(String)"
        });
    }
    else if(!isvalidEmail(req.body.recepientEmails))
    {
        return res.status(400).send({
            message:"Failed!!! recepientEmails is not valid Email formate "
        })
    }
    
    if(!req.body.requester)
    {
        return res.status(400).send({
            message:"Failed!!! requester is not provided"
        });
    }
    else if(typeof req.body.requester!=="string")
    {
        return res.status(400).send({
            message:"Failed!!! requester value provided is not in a valid formate(String)"
        });
    }
    else if(!isvalidEmail(req.body.requester))
    {
        return res.status(400).send({
            message:"Failed!!! requester is not valid Email formate"
        })
    }
    next();
}
const emailReqvalidation={
    emailValidation:emailValidation
}

module.exports=emailReqvalidation