if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express")
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())

app.get("/coba", async (req, res) => {
    try {
        const responseData = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b998f3f5434f4298acef55fa937d94a9')
        const result = await responseData.json()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log(`I LOVE YOU ${PORT}`);
})