const express = require("express");
const app = express(); //creating a instance. the returns of express() will be stored in app
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
// use - acts as a middleware.
// express.json() - tells the backend about the data format returns from frontend

//to get data from client-side we use request.body object

app.listen(5000, () => {
    console.log("Server listening to port 5000")
})
