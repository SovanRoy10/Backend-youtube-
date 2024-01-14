// require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import connetDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connetDB();


/* 
// import mongoose from "mongoose";
//import { DB_NAME } from "./constants";

// function connectDB(){}
// connectDB()

// IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

;( async ()=>{ 
    try{
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error)
    {
        console.log("ERROR: ",error);
        throw error;
    }
}) */


