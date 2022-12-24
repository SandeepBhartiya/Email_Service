const notificationController=require("../controllers/notification.controller");
const {emailReqBodies}=require('../middelwares')
module.exports=(app)=>{
    app.post("/notiserv/api/v1/notification",[emailReqBodies.emailValidation],notificationController.createEmail);
    app.get("/notiserv/api/v1/notification",notificationController.getNotification);
}