const express = require('express')
const app = express()
const PORT = "4000"
const TutuRoute = require('./routes/tutorialRoute')
const PostRoute = require('./routes/postRoute')
const UserRoute = require('./routes/UserRoute')
const connection = require('./config/config')
require('dotenv').config();
connection();

app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use('/tutorial', TutuRoute)
app.use('/posts', PostRoute)
app.use('/user', UserRoute)


app.get('/', (req, res) => {
    res.send('hello kiran')
})

app.listen(PORT, () => {
    console.log(`app running in this port ${PORT}`)
})