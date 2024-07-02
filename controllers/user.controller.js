const pool = require('../config/database')
const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        //get data from request body
        const { username, email, password } = req.body

        //username is missing
        if (!username) {
            return res.json({
                "success": false,
                "message": "Username is Missing"
            })
        }

        //email is missing
        if (!email) {
            return res.json({
                "success": false,
                "message": "Email is Missing"
            })
        }

        //password is missing
        if (!password) {
            return res.json({
                "success": false,
                "message": "Password is Missing"
            })
        }

        //check for existing username and email
        const data = await pool.query('select * from users where username=? OR email=?', [username, email])

        //if email is already is use
        if (data[0].length > 0) {
            return res.json({
                "success": false,
                "message": "Email Already In Use"
            })
        }

        //if username is already in use
        if (data[0].length > 0) {
            return res.json({
                "success": false,
                "message": "Username Already In Use"
            })
        }

        //hash the password
        const hashedPassword = await bycrpt.hash(password, 10)

        //add new user
        const user = await pool.query('insert into users(role_id,username,email,password) values(?,?,?,?)', [2, username, email, hashedPassword])

        res.json({
            "success": true,
            "message": "User Registered Successfully",
        })

    } catch (error) {
        console.log(error)
        res.json({
            "success": false,
            error
        })
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        //username is missing
        if (!username) {
            return res.json({
                "success": false,
                "message": "Username is Missing"
            })
        }

        //password is missing
        if (!password) {
            return res.json({
                "success": false,
                "message": "Password is Missing"
            })
        }

        const data = await pool.query('select user_id,role_id,password from users where username=?', [username]);

        if (data[0].length == 0) {
            return res.json({
                "success": false,
                "message": "User not found"
            })
        }

        const isMatch = await bycrpt.compare(password, data[0][0].password)

        if (!isMatch) {
            return res.json({
                "success": false,
                "message": "Incorrect Password"
            })
        }
        console.log(data[0][0].user_id, data[0][0].role_id)
        // Generate JWT token
        const token = jwt.sign({ user_id: data[0][0].user_id, role_id: data[0][0].role_id }, process.env.JWT_SECRET, { expiresIn: '720h' })

        // Set the token in an HTTP-only cookie
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 108000000 }) // 30 days

        return res.json({
            "success": true,
            "message": "User logged in successfully"
        })

    } catch (error) {
        console.log(error)
        return res.json({
            "success": false,
            error
        })
    }
}

const getAvailableRides = async (req, res) => {
    try {
        const { origin, dest, cat, rh } = req.query
        res.send('rides')
    } catch (error) {

    }
}

const rentCar = async (req, res) => {
    try {

    } catch (error) {

    }
}

module.exports = { signup, login, getAvailableRides, rentCar }