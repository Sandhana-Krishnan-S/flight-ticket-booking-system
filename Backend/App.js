const express = require('express')
const authRoute = require('./router/authRoute')
const bodyParser = require('body-parser');
require('./DB/mongoDb')
const port = 3577

const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use('/auth' , authRoute)

app.use('/' , (req, res) => {
    res.send('Hello World!')})

app.listen(port , () => {
    console.log(`App is running on http://localhost:${port}`)
})