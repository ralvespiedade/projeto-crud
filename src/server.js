const express = require('express')
const path = require('path')

const app = express()

//Defining the template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

//Defining public files path
app.use(express.static(path.join(__dirname, 'public')))

//Enabling server to receive data by post (form)
app.use(express.urlencoded({ extended: true }))

//-- ROUTS --

app.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Home'
    })
})

// 404 error (not found)
app.get((req, res) => {
    res.send('Page not found!')
})

//-- RUNNING SERVER --

//Getting port difined by the process
const port = process.env.port || 8080


app.listen(port, () => {
    console.log(`Server is listening from port ${port}`)
})


