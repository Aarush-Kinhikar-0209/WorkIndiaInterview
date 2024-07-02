const express = require('express')
const { signup, login, getAvailableRides, rentCar } = require('../controllers/user.controller')
const { isAuthenticated } = require('../middlewares/authentication')

const userRouter = express.Router()

userRouter.post('/signup', signup)

userRouter.post('/login', login)

userRouter.get('/car/get-rides', isAuthenticated, getAvailableRides)

userRouter.post('/car/rent', isAuthenticated, rentCar)

module.exports = userRouter