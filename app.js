const express = require('express');
const router= require('./src/routes/api');
const app= new express();
const path=require('path');
require('dotenv').config();

//Security Middleware

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp=require('hpp');
const cors = require('cors');

// Database

const mongoose = require('mongoose');

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Calling the express.json() method for parsing
app.use(express.json());

// Rate Limiter
const limiter=rateLimit({windowMs:15*60*100,max:3000});

// DB Connection
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// Managing Frontend Routing 
app.use(express.static('client/build'));
// Managing Backend API routing 

app.use("/api/v1",router);
// Add React Front End Routing
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))

});



module.exports=app;


