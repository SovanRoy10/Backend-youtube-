// console.log("Sovan Roy");

require('dotenv').config()
// console.log(process.env)

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Welcome to twitter')
})

app.get('/login',(req,res)=>{
    res.send("<h1>You have to log in</h1>")
})

app.listen(process.env, () => {
  console.log(`Example app listening on port ${port}`)
})

//total ports more than 65000 