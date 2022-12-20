const emailTransport=require('../notification/notifier');
const Notification=require('../models/notification.model');
const cron=require('node-cron');
const {emailStatus}=require('../utils/constant');

cron.schedule("*/30 * * * * *",async()=>{
    const notification=await Notification.find({status:emailStatus.unsent})
    console.log("number of unsent email",notification.length);
    if(notification)
    {
        notification.forEach(e=>{
            const mailObj={
                from:e.requester,
                to:e.recepientEmails,
                subject:e.subject,
                text:e.content
            }
            emailTransport.sendMail(mailObj,async(err,info)=>{
                if(err)
                {
                    console.log("#### errro while sending email ###",err.message);
                }
                else
                {
                    console.log("#### Successfully sent  email ####",info)
                    e.status=emailStatus.sent
                    await e.save();
                }
            })
        })
    }
})