const https = require('http')

const server = https.createServer((req,res) => {

    if(req.url == '/about')
                            res.end(`<h1 style = "background-color : crimson;" >It's About</h1>`)
   else if(req.url == '/contactUs')
                            res.end('<h1> Welcome to Contact us </h1>')
    else res.end('<h1>Home Page </h1>')

    console.log('yes');
    
   
})

server.listen(3333)