const notificaitionController=require('../controllers/notification.controller');

module.exports=(app)=>{
    app.post("/ecomm/api/v1/notifications",notificaitionController.createNotic)
}