
const express = require('express')
const app = express()
const cors = require('cors')
const os = require('os');
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send(`<h3>It's ${os.hostname()}</h3>`);
})
app.get('/api', (req, res) => {
    res.json({"message":"message from back"});
})
app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})