const app=require('express')();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const serverConfig=require('./configs/server.config');
const dbConfig=require('./configs/db.config');
app.use(bodyParser.json());

mongoose.connect(dbConfig.DB_URL);
const db=mongoose.connection

db.on('error',()=>{
    console.log("Error...")
});
db.once('open',()=>{
    console.log("connected..")
})

require('./routes/notification.route')(app);
require('./emailScheduler/scheduler')
app.listen(serverConfig.PORT,()=>{
    console.log(`server connected At: ${serverConfig.PORT}`)
})
