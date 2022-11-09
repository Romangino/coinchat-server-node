const express = require('express'); // load express
import cors from 'cors'


const app = express();

app.use(cors());
app.use(express.json());

app.get('/hello',(req, res) =>  // respond HTTP GET
    res.send('hello world'));      // "hello world"

app.listen(process.env.PORT || 3000);