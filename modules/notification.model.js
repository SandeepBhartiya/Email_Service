const {emailStatus}=require('../utils/constant')

module.exports=(sequelize,Sequelize)=>{
    const Notificaton=sequelize.define("notification",{
        subject:{
            type:Sequelize.STRING,
            allowNull:false
        },
        recepientEmails:{
            type:Sequelize.STRING,
            allowNull:false
        },
        content:{
            type:Sequelize.STRING,
            allowNull:false
        },
        requester:{
            type:Sequelize.STRING,
            allowNull:false
        },
        emailStatus:{
            type:Sequelize.ENUM(emailStatus.sent,emailStatus.unsent),
            defaultValue:emailStatus.unsent
        }
    });
    return Notificaton;
}