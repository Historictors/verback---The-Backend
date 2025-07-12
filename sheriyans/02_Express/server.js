const express = require('express')
// const morgan = require('morgan')
const app = express()


// app.set('view engine','ejs')

app.get('/',(req,res) =>{
        res.send("Hello Response from default route")
})

app.get('/main',(req,res) =>{
    res.render('index')
})
//third party middleware
// app.use(morgan('dev'))

 // custom middleware
// app.use((req,res,next) => {
//     res.send('custom middleware')
//     next()
// })

// route specific middleware

// app.get('/about',(req,res,next) =>{

//     req.send("About")
//     next()
// },
// (req,res) =>{
//             res.send("it's About")
// })


app.listen('3000')