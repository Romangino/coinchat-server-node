const express = require('express'); // load express
app = express();      // create instance

app.get('/hello',(req, res) =>  // respond HTTP GET
    res.send('hello world'));      // "hello world"

app.listen(3000);