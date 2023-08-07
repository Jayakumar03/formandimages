const express = require("express")
const fileUpload = require("express-fileupload")

const app = express()

// Default view engine
app.set("view engine", "ejs");

// Middle ware
app.use(express.json()) 
/*
app.use(express.json()):

Purpose: This middleware is used to parse incoming JSON data from the request body.
Data Type: It handles requests with the Content-Type: application/json header and parses the JSON data into a JavaScript object.
Usage: It's commonly used when clients send data in JSON format, which is a common practice in modern APIs.
*/
app.use(express.urlencoded({extended:true}))
/*
app.use(express.urlencoded({ extended: true })):

Purpose: This middleware is used to parse incoming URL-encoded form data from the request body.
Data Type: It handles requests with the Content-Type: application/x-www-form-urlencoded header and parses the data into an object format.
Usage: It's commonly used when data is sent from HTML forms.
*/


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir : "/tmp/"
}))

/*
Using the fileUpload Middleware: This line of code tells your Express app to use the fileUpload middleware. The middleware is configured with an options object passed as an argument. In this case, you're setting two options:
useTempFiles: true: This option indicates that temporary files should be used during the file upload process. Temporary files are useful when dealing with large files to prevent exhausting memory resources.
tempFileDir: "/tmp/": This option specifies the directory where temporary files will be stored. Temporary files are created while the upload is being processed and are removed after the upload is complete.
*/



// Routes
app.get("/myget", (req, res) => {

    // res.send(req.body)
    // won't work if your view engine is from ejs. But it will work for postman and react any other frontend frameworks

    // USe have use query instaed of body. But this method will not work in react, vue or postman
    res.send(req.query) 
    console.log(req.query.file)

})

app.post("/mypost", (req, res) => {

    res.send(req.body)

})


// serving the frontend

app.get("/mygetform", (req, res) => {
    // By default when used render it check in views folder. so only provide the html file name as argument

    res.render("getform")

})

app.get("/mypostform", (req, res) => {
    // By default when used render it check in views folder. so only provide the html file name as argument

    res.render("postform")

})


module.exports = app