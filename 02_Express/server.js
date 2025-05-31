const express = require('express')

const start = express()

start.set('view engine', 'ejs')


start.get('/',(req,res) =>{
    
    res.send('Home-Page')
    res.render('index')
})

start.get('/about',(req,res) =>{
        res.send('About-Page')
        console.log("this is middle Ware");
})

start.use((req,res,next) => {

    res.send('this is middle Ware')
    
})

start.listen('3000')