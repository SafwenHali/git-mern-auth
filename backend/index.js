const express = require('express')
const mongoose= require ('mongoose')
const cors = require('cors')
const app = express()
const User= require('./model/user.model')

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/mern-auth-app')

app.post('/api/signup',async (req,res) => {
    console.log(req.body);
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.mdp,
        })
        res.json({status : 'ok'})
    
    }catch (err) {
        console.log(err);
        res.json({status : 'error', error:'duplicate email'})
    }  
})
app.post('/api/signin',async (req,res) => {
        await User.findOne({
            email: req.body.email,
            password: req.body.mdp,
        })
        if (user){
        res.json({status : 'ok', user: true})}
        else{
        res.json({status : 'error', user: false})  
        }
    
})
app.get('/',(req,res) => {
    res.send('hello back')
})

app.listen(7000,() => {
    console.log('server started on 7000')
})