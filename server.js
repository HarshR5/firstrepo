console.log("Server is starting...");
const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const dotenv = require("dotenv");
dotenv.config();   
const connectDb = require("./db/connect");
// connect to data base
connectDb();    


const PORT = 3000;


// middlewares
app.use(express.json());
// what is this above ?
// it helps to access req.body
//  json data from client

app.use("/api/v1/tasks" , tasks);






app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);

})