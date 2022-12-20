const db=require('../modules');
const Notific=db.notification;

exports.createNotic=(req,res)=>{
    
        const notiObj={
            subject:req.body.subject,
            recepientEmails:req.body.recepientEmails,
            content:req.body.content,
            requester:req.body.requester
        }

        Notific.create(notiObj).then(notific=>{
            console.log("#### Created Notification ####")
            res.status(201).send(notific);
        }).catch(err=>{
            console.log("error while creating notification",err.message);
            res.status(500).send({
                message:"Internal server error while creating notification"
            })
        })
    
}