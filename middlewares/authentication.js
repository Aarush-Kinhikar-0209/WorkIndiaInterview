const jwt = require('jsonwebtoken')

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
    try {
        // Get the token from the cookies
        const token = req.cookies.token

        console.log(token)

        // Check if the token exists
        if (!token) {
            return res.json({
                "success": false,
                "message": "Authentication required"
            })
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decoded)

        // Attach the decoded user information to the request object
        req.user_id = decoded.user_id

        // Call the next function
        next()

    } catch (error) {
        // If the token is invalid or expired
        res.json({
            "success": false,
            "message": 'Invalid or expired token'
        })
    }
}

const isAdmin = (req, res, next) => {
    try {
        // Get the token from the cookies
        const token = req.cookies.token

        // Check if the token exists
        if (!token) {
            return res.json({
                "success": false,
                "message": "Authentication required"
            })
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //check for admin role
        if (decoded.role_id != 1) {
            return res.json({
                "success": false,
                "message": "User is Not Admin"
            })
        }

        // set user_id
        req.user_id = decoded.user_id

        // Call the next function
        next()
    } catch (error) {
        // If the token is invalid or expired
        res.json({
            "success": false,
            "message": 'Invalid or expired token'
        })
    }
}


module.exports = { isAuthenticated, isAdmin }