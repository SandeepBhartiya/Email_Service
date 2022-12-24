const emailService=require('../notification/emailservice');
const Notification=require('../models/notification.models');
const cron=require('node-cron');
const {emailStatus}=require('../utils/constants')
cron.schedule("*/30 * * * * *",async()=>{
    try
    {
        console.log("\n#### Inside the scheduler #####\n")
        const notification=await Notification.find({emailStatus:emailStatus.unsent});
        console.log("Total number of unsent email",notification.length);
        if(notification)
        {
            notification.forEach(n => {
                mailObj={
                    from:n.requester,
                    to:n.recepientEmails,
                    subject:n.subject,
                    text:n.content
                }
                emailService.sendMail(mailObj,(err,info)=>{
                    if(err)
                    {
                        console.log("\n#### Email sent Failed  ####\n",err.message);
                    }
                    else
                    {
                        console.log("\n\n#### Email sent successfully ####\n\n",info)
                        n.emailStatus=emailStatus.sent;
                         n.save();
                    }
                })
            });

        }
    }catch(err)
    {
        console.log("ERROR.....")
    }   

});
