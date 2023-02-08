const express = require('express')
const mongoose= require ('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:9000/mern-aut-app')

app.post('/api/createUser',(req,res) => {
    console.log(req.body);
    res.json({status : 'ok'})
})

app.listen(7000,() => {
    console.log('server started on 7000')
})