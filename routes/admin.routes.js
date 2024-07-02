const express = require('express')
const { login, addNewCar, rideCompleted } = require('../controllers/admin.controller')
const { isAdmin } = require('../middlewares/authentication')

const adminRouter = express.Router()

adminRouter.post('/admin/login', login)

adminRouter.post('/car/create', isAdmin, addNewCar)

adminRouter.post('/car/update-rent-history', isAdmin, rideCompleted)

module.exports = adminRouter