const pool = require('../config/database')

const login = async (req, res) => {
    try {
        const { car_id, origin, destination, hours, requirement } = req.body
    } catch (error) {
        return res.json({
            "success": false,
            error
        })
    }
}

const addNewCar = async (req, res) => {
    try {
        const { car_id, origin, destination, hours, requirement } = req.body
    } catch (error) {
        return res.json({
            "success": false,
            error
        })
    }
}

const rideCompleted = async (req, res) => {
    try {
        const { car_id, origin, destination, hours, requirement } = req.body
    } catch (error) {
        return res.json({
            "success": false,
            error
        })
    }
}

module.exports = { login, addNewCar, rideCompleted }