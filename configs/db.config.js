module.exports={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"admin",
    DB:"Ecomm_Notification",
    dialect:"mysql",
        pool:{
            max:5,
            min:0,
            acquire:3000,
            idle:1000
        }
    
}