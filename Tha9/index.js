const express = require('express');
const app = express();
const path = require('path');
console.log(__dirname); //dirname current directory  kaaa name deta haoiiii

app.use('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "public/Hello.txt"), 'test.txt') //path join is similar to string concatination
    // res.sendFile(path.join(__dirname, "public/test.json"))

    // res.download(path.join(__dirname, "public/test.json"), 'hello.json')

    // res.sendFile(path.join(__dirname, "public/owl.jpg"))
    // res.download(path.join(__dirname, "public/owl.jpg"), 'ullu.jpg')

    
})

//it listens a port
app.listen(5000);