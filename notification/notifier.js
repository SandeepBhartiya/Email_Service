const nodemailer=require('nodemailer');

module.exports=nodemailer.createTransport({
    port:465,
    service:"gmail",
    auth:{
        user:"sandeepbhartiya9087@gmail.com",
        pass:"jetfcwuoursxetve"
    },
    secure:true
});