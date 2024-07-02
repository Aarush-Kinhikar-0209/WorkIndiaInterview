const pool = require('../config/database')

const login = async (req, res) => {
    res.send('login')
}

const addNewCar = async (req, res) => {
    res.send('addNewCar')
}

const rideCompleted = async (req, res) => {
    res.send('rideCompleted')
}

module.exports = { login, addNewCar, rideCompleted }