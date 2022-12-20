const notificationController=require('../controllers/notification.controller');

module.exports=(app)=>{
    app.post("/notiserv/api/v1/notifications",notificationController.createNotification);
    app.get("/notiserv/api/v1/email/:id",notificationController.getNotification);
}