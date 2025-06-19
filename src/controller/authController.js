const jwt = require('jsonwebtoken'); // Import JWT library for token operations
const secret = "5509bb6d-c5c6-4cd5-b1cf-dbabd285ce33"; // Secret key for signing/verifying tokens

const authController = {
    // 1. Login handler
    login: (request, response) => {
        // Extract username and password from request body
        const { username, password } = request.body;

        // Check credentials (hardcoded for demo)
        if (username === 'admin' && password === 'admin') {
            // User data to embed in token
            const userDetails = {
                name: "Dependra",
                email: "de@gmail.com"
            };
            
            // Create JWT token with user details
            const token = jwt.sign(userDetails, secret, { expiresIn: '1h' });

            // Set secure HTTP-only cookie with token
            response.cookie('jwtToken', token, {
                httpOnly: true,  // Prevents client-side JS access
                secure: true,    // Only send over HTTPS
                domain: 'localhost', // Cookie domain
                path: '/'        // Accessible across all routes
            });

            // Send success response with user data
            response.json({ 
                message: 'User authenticated',
                userDetails: userDetails 
            });
        } else {
            // Invalid credentials response
            response.status(401).json({ message: 'Invalid credentials' });
        }
    },

    // 2. Logout handler
    logout: (request, response) => {
        // Clear JWT cookie
        response.clearCookie('jwtToken');
        
        // Send logout confirmation
        response.json({ message: 'User logged out Successfully' });
    },

    // 3. Authentication status checker
    isUserLoggedIn: (request, response) => {
        // Get token from cookies
        const token = request.cookies.jwtToken;  // Fixed typo: was request.cookie.jwtTojen

        // Check if token exists
        if (!token) {
            return response.status(401).json({ message: "Unauthorized access" });
        }

        // Verify token validity
        jwt.verify(token, secret, (error, userDetails) => {
            if (error) {
                // Invalid/expired token
                return response.status(401).json({ message: 'Unauthorized access' });
            } else {
                // Valid token - send user details
                return response.json({ userDetails: userDetails });
            }
        });
    }
}

module.exports = authController;
