const express = require('express');
const app = express();




// const slash = (req, res) => {
//     res.send("Hello");
// };

// app.get('/', slash);
// app.post('/', slash);
// app.put('/', slash);
// app.delete('/', slash);

// crud = ? >> post - send, get - read, put - , delete - delete
app.get('/', (req, res) => {
    // res.send('ab?cd');
    // res.json({
    //     a: 1,
    //     b: 2,
    //     c: 3
    // });
    res.sendStatus(500);
});


app.post('/', (req, res) => {
    res.json({ text: req.body })
});


app.get('/ab?cd', function(req, res) {
    res.send('ab?cd')
});


app.get('/ab*cd', function(req, res) {
    res.send('ab*cd')
});

app.get('/ab+cd', function(req, res) {
    res.send('ab+cd')
});

app.get('/.*fly$/', function(req, res) {
    res.send('/.*fly$/')
});

app.get('users/:userId/books/:bookId', function(req, res) {
    res.send(req.params)
});

app.listen(5000);