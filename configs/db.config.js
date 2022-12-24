if(process.env.NODE_ENV!="prodcution")
{
    require('dotenv').config();
}

module.exports={
    DB_URL:process.env.DB_URL
}