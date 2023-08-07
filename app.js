const express = require("express")

const app = express()

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


app.get("/myget", (req, res) => {

    res.send(req.body)

})


module.exports = app