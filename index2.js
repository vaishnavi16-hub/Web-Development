import express from 'express'

const app = express()
const port = 3000
app.use(express.json())

// store data from json...

let teaData = []
let nextId = 1



// for post data
app.post('/tea',(req,res)=>{
    const {name, price} = req.body
    const newTea ={id:nextId++, name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)
});


// for get data
app.get('/tea',(req,res)=>{
    res.status(200).send(teaData)
});



app.get('/teas',(req,res)=>{
    res.status(200).send(teaData)
})

// get  a tea with id
app.get('/teas/:id',(req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
   if (!tea){
    return res.status(404).send('Tea no found')
   }
 res.status(200).send(tea)
})



app.listen(port,()=>{
    console.log('Server is running at port: ${port}...')
});