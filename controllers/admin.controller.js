const pool = require('../config/database')

const login = async (req, res) => {
    try {

    } catch (error) {
        return res.json({
            "success": false,
            error
        })
    }
}

const addNewCar = async (req, res) => {
    try {
        const { category, model, number_plate, current_city, rent_per_hr } = req.body

        const data = await pool.query('insert into vehicles values(?,?,?,?,?)', [category, model, number_plate, current_city, rent_per_hr]);

        return res.json({
            "success": true,
            "message": "New Vehicle Added"
        })
    } catch (error) {
        return res.json({
            "success": false,
            error
        })
    }
}

const rideCompleted = async (req, res) => {
    try {

    } catch (error) {
        return res.json({
            "success": false,
            error
        })
    }
}

module.exports = { login, addNewCar, rideCompleted }