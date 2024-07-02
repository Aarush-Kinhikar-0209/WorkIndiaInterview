const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// const connectDatabase = require('./config/database')
const app = express()

const userRouter = require('./routes/user.routes')
const adminRouter = require('./routes/admin.routes')

// connectDatabase()

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '30mb', extended: true }))

//Using Routes
app.use('/api/', userRouter)
app.use('/api/', adminRouter)

app.get('/', (req, res) => {
    res.send('Server is Working')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port 3000`)
})