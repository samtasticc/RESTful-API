const express = require('express')
const app = express()

const PORT = 4000

let total = 0

// use this so express can read(or USE) json/so we can read the .body
app.use(express.json())

app.get('/calculator', (req, res) => {
    res.status(300).json({total})
})

app.post('/calculator', (req, res) => {
    // where we get everything from
    // ?name=Nikki, which was req.query.name
    const number = req.body.number
    const operation = req.body.operation

    if(operation === 'add') {
        total += number
    } else if(operation === 'subtract'){
        total -= number
    } else if(operation === 'multiply'){
        total *= number
    } else if(operation === 'divide'){
        total /= number
    }else{
        return res.status(400).json({error: 'Invalid Operation'})
    }
    res.status(200).json({total})
})

app.delete('/calculator', (req, res) => {
    total = 0
    res.status(200).json({total, msg: 'Total reset'})
})
app.listen(PORT, () => {
    console.log('Listening on port 4000')
})