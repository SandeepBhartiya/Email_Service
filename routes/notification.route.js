const notificationController=require("../controllers/notification.controller");
const {emailReqBodies,authValidation}=require('../middelwares')
module.exports=(app)=>{
    app.post("/notiserv/api/v1/notification",[emailReqBodies.emailValidation],notificationController.acceptNotification);
    app.get("/notiserv/api/v1/notification",[authValidation.isEmailExist],notificationController.getAllNotification);
    app.get("/notiserv/api/v1/notification/:id",[authValidation.singleEmailExist],notificationController.getSingleNotification);
}