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
app.use(express.static(path.join(__dirname, 'data')))
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'app')))



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







var artist = members.artist
console.log(artist[1].name)


app.get('/api/artist', (req, res)=>{
  const artist = members.artist
    let data = " "
    for(let i = 0; i< artist.length; i++){

        data += `<h4>${artist[i].name}</h4>`
    }
        res.send(data)    
})


app.get('/home/justin/album', (req, res)=>{
    const offMyFace = members.offMyFace[0].tracks
    let arr = ""
    for(let i = 0; i < offMyFace.length; i++){
        arr += `<h4>${offMyFace[i]}<h4/>`
    }
    res.send(arr);
})


app.get('/api/artist/album?', (req, res)=>{
    
    res.json(artist);
})



app.listen(PORT, ()=>{
    console.log(`running in port http://localhost:${PORT}/`);
})