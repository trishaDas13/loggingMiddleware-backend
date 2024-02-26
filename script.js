const express = require("express");
const fs = require("fs");
const morgan = require( "morgan" );

const app = express();
const writeFile = ((data) => fs.appendFileSync("access.log",data + "\n"));
//* Logging middleware
app.use((req, res, next) =>{
    writeFile(
        `Time: ${new Date()}, Name: Trisha`
    )
    next();
})
//* Logging Middleware using 3rd party - Morgan
app.use(morgan('dev'));

//* create API
app.use('/demoApi',(req, res) => {
    res.json({
        success : true,
        message: "API called successfully"
    })
})

//*  Error handling middleware
app.use(function (err, req, res, next) {
    console.error("Error found !"  + err);
    res.status(500).send('Something very wrong happened !');
})

app.listen(5000,()=>{
    console.log('server is runnnig');
})