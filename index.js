const express = require('express');
const app = express();

const PORT = 5000

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Its / root"
    });
})

app.listen(PORT, (req, res) => {
    console.log('its working')
})