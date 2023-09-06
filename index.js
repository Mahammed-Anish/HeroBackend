const express = require('express');
const port = 8000;
const app = express();

app.listen(port,function(err) {
    if(err) {
        console.log('Error is running on the server');
    } 
    console.log(`server running on port: ${port}`);
})