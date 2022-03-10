require('dotenv').config();

const PORT = process.env.PORT || 9000;

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1>')
})

server.listen(PORT, () => {
    console.log(process.env.PORT);
    console.log(`server is up on port ${PORT}, user is ${process.env.username}`)
});