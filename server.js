const app=require('express')();
const bodyParser=require('body-parser');
const mongoose=require('mongoose')

app.use(bodyParser.json());

const serverConfig=require('./config/server.config');
const dbConfig=require('./config/db.config')

mongoose.connect(dbConfig.DB_URL)

const db=mongoose.connection

db.on("error",()=>{
    console.log("Error")
});

db.once("open",()=>{
    console.log("Connected....")
});


require('./routes/notification.route')(app);
require('./scheduler/emailScheduler')
app.listen(serverConfig.PORT,()=>{
    console.log(`server running at ${serverConfig.PORT}`)
})