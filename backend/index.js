const express = require('express');

const app =express()

const cors =require('cors')

const User = require('./db/user')

require('./db/config')

app.use(cors())
app.use(express.json())





app.post('/signup' , async (req,res) => {
     let user =new User(req.body)

     let result =await user.save()

    res.send(result);
})

app.post('/login' , async (req,res) => {
     let user = await User.findOne({
        email:req.body.email,
        name:req.body.name  
     }).select("-password");
     res.send(user)
})


app.listen(5000)