const express = require('express')
const path = require('path')
const app = express()
const members = require('./data/members')
const morgan = require('morgan')
const hbs = require('hbs')
const PORT = 5000


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))




app.get('/', ( req, res)=>{
    res.render("index", {
        greeting: `WELCOME at localhost:${PORT}`
    })
})

app.get('/home', ( req, res)=>{
    res.render("home", {
        greeting: "Welcome at Home"
    })
})

app.get('/login', ( req, res)=>{
    res.render("login", {
        greeting:"Ini halaman login!"
    })
})

app.get('/register', ( req, res)=>{
    res.render("register", {
        greeting: "Ini halaman register!"
    })
})








app.listen(PORT, ()=>{
    console.log(`running in port http://localhost:${PORT}/`);
})
