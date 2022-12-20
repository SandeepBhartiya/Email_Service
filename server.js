const app=require('express')();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
const serverConfig=require('./configs/server.config');
const db=require('./modules');
const Noti=db.notification;

db.sequelize.sync({force:true}).then(()=>{
    console.log("Connected...");
    init();
}).catch(err=>{
    console.log("Error..",err.message)
})

async function init()
{
    Noti.create({
        subject:"New",
        recepientEmails:"pradeepsaroj108@gmail.com",
        content:"dsa;;das",
        requester:"dasdasd"
    })
}
require('./routes/notification.routes')(app);
require('./scheduler/notiScheduler');
app.listen(serverConfig.PORT,()=>{
    console.log(`Serve connected at ${serverConfig.PORT}`)
});