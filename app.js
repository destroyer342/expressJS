require("dotenv").config();
const express = require("express")
const app = express()

let port = process.env.PORT || 8010;

const function1 = () => {
    console.log(`App is running at the port ${port}`) ;
 }

app.listen(port,function1);
app.get('/', (req, res) =>{
res.send('Hello raabaaances')

})