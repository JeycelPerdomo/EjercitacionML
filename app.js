const express = require ('express');
const { dirname } = require('path');

const path = require ('path')
const app = express();

app.listen(process.env.PORT || 3000, () => console.log ('Listening on port 3000'))

app.use (express.static(path.resolve(__dirname, 'public')))

app.get ('/', (req,res) => {
    let htmlPath= path.resolve (__dirname, 'views/home.html')
    res.sendFile(htmlPath);
})

app.get ('/register', (req,res) => {
    let htmlPath2 = path.resolve (__dirname, 'views/register.html');
    res.sendFile (htmlPath2)
})

app.get ('/login', (req,res) => {
    let htmlPath3 = path.resolve (__dirname, 'views/login.html');
    res.sendFile (htmlPath3)
})