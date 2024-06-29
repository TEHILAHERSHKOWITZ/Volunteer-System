require('dotenv').config();

const mongoose = require('mongoose');

//main().catch(err => console.log(err));

async function mongooseConnect() {
    await mongoose.connect(process.env.DB_CONNECTION);
    
    console.log('connected to mongodb!!')
}

module.exports = mongooseConnect;

