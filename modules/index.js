const Sequelize=require('sequelize');
const { dialect } = require('../configs/db.config');

const dbConfig=require('../configs/db.config');

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }

)

const db={}

db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.notification=require('./notification.model')(sequelize,Sequelize);

module.exports=db;