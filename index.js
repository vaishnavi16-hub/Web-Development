
 
// import express from 'express'  TYPE IN package.js file type:"module"
// const app = express()
// const port = 3000
// app.listen(port, () =>{
//     console.log('server is running port: ${port}..')
// })




// and in require you can type   type:"commonjs"
const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req,res) =>{
    res.send ("hello from vaishnavi")
})

app.get ("/home",(req,res)=>{
    res.send("this is my home page")
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}...`);
});