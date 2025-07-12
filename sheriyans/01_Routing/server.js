const https = require('http') // includes http package in our file


// # createServer() is a method on http which requres a callback as argument with two parameters one for respones and other is for request,
//  returns a instance of a server

// res.end() ,res is call back parameters associated with respone
//  we can pass values to it , it displays it on the webpage for every request on our server

// req.url(), req is associated with request ,which is parameter of the callback
//  -> returns routes 
const server = https.createServer((req,res) => {  


    if(req.url == '/about')

                            res.end(`<h1 style = "background-color : crimson;" >It's About</h1>`)
   else if(req.url == '/contactUs')
                            res.end('<h1> Welcome to Contact us </h1>')
    else res.end('<h1>Home Page </h1>')

    console.log('yes');
    
   
})


server.listen(3333) // it is used to run our server
                    // our terminal doesn't move to the next line because serving is running
                    // needs to run after changes in js file 
                    // for tracking continously use "npx nodemon fileName"