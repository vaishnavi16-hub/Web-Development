import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Vaishnavi");
});

app.get("/ice-tea", (req,res)=>{
    res.send("what is this")
})

app.get("/twitter",(req,res) =>{
    res.send("this is twitter");
});

app.get("/instagram",(req,res)=>{
    res.send("thi is instagram");
});

app.get ("/youtube",(req,res) =>{
    res.send("thi is youtube");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}...`);
});
