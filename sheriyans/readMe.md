
---

````markdown
# Node.js Basic Server Setup & Package Management

---

## 🟢 Run JS Code

```bash
node fileName.js
````

---

## 🚀 Creating a Node Project

* Use `npm init -y` to initialize your project (like a server)
* It generates a `package.json` file (which contains metadata)
* The `-y` flag automatically answers "yes" to all prompts
* Without `-y`, you have to answer questions/prompts step-by-step

---

## 📦 Package

* A package is reusable code written by a developer and published on npm
  so that other developers can use it

---

## 📌 How to Use Packages (There are some pre-installed packages)

1. Run

   ```bash
   npm install packageName
   ```

   (You will see the package in `node_modules` and in dependencies inside `package.json`)

2. Include the package in your file with

   ```js
   require('packageName')
   ```

   Store it in a variable to use further

3. Running `npm install` or `npm i` regenerates `package-lock.json` and the `node_modules` folder

---

## 📄 What is `package.json`?

* It contains metadata of your project (name, version, scripts, author, dependencies)
* Helps Node Package Manager manage your project

---

## 🌐 Creating a Server

1. Require the built-in `http` package (no need to install it)
   Store it in a variable to use it in your program

2. `.createServer()` is a method on the `http` package that returns an instance of a server

3. `.listen()` runs your server

---

## 🛠 http

* It is a built-in package
* Used to create web servers and handle requests and responses

---

## ⚙️ .createServer()

* It is a method on the `http` module used to create an HTTP server
* Returns a server object
* Needs a callback as an argument, which runs whenever a request hits your server

```js
http.createServer((req, res) => {
  // handle request and response
});
```

> Behind the scenes, Node.js uses event-driven architecture
> This means code reacts to events like a button click, a request, etc.

---

## 📥 req.url

* The request object of an incoming HTTP request is `req`
* `req.url` returns the URL path of the request sent by the client or routes
* You can respond conditionally according to the routes

---

## 📤 res.end()

* `res` is the response object used to send data to the client on a request
* `res.end()` is a method that indicates the completion of the response of a request made by the client
* It ends the HTTP response stream and closes the connection
* Otherwise, your website keeps loading or waiting for the response

---

## 🧷 .listen()

* It is a method on the server object
* It starts the server and waits for requests on a specific port

---

# Example Code

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.end("This is the About Page.");
  } else {
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

---

Open your browser and visit:

* `http://localhost:3000/` — Home Page
* `http://localhost:3000/about` — About Page
* Any other URL — 404 Page

---

**Happy coding!** 🚀

```
Keep Learning Consistency is the key!
```