const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/users/user-list', (req, res) => {
    res.send('You do not have any employee yet!')
})

app.listen(process.env.PORT || 3000)
