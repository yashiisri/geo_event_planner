import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
    // Get the token from the cookies or the request headers
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: 'No token provided, authorization denied',
            success: false
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Attach the user information to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(401).json({
            message: 'Token is not valid',
            success: false
        });
    }
};

export default isAuthenticated;

