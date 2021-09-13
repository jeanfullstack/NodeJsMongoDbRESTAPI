import dotenv from 'dotenv';
dotenv.config({ path:__dirname + '/.env' });



/* const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'}); */



export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tasksdb'
};


//mongodb://localhost/tasksdb



