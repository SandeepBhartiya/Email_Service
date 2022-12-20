const db=require('../modules');
const Notification=db.notification;
const cron=require('node-cron');
const emailTransport=require('../notifications/emailService');
const {emailStatus}=require('../utils/constant');
const { notification } = require('../modules');
cron.schedule("*/30 * * * * *",()=>{
    console.log("\n\n#### Inside the scheduler ####\n\n");
    Notification.findAll({
        where:{emailStatus:emailStatus.unsent}
    }).then(notification=>{
        console.log(notification)
        console.log("Number of request unSent",notification.length);
        notification.forEach(n => {
            const mailObj={
                from:n.requester,
                to:n.recepientEmails,
                subject:n.subject,
                text:n.content
            }
            emailTransport.sendMail(mailObj,(err,info)=>{
                if(err)
                {
                    console.log("### Error while sending email ###",err.message);
                }
                else
                {
                    console.log("### Successfully sent Email ###",info);
                    n.emailStatus=emailStatus.sent;
                    n.save();
                    
                }
            })
        });
    }).catch(err=>{
        console.log("### error while sending notification ###",err.message);
    
    })

});