const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

// Middleware order matters!
app.use(express.json());
app.use(cookieParser()); // Parse cookies BEFORE routes
app.use('/auth', authRoutes);

const PORT = 5000; // Use higher port
app.listen(PORT, (error) => {
    if (error) console.log(`Server not started`);
    else console.log(`Server running on port: ${PORT}`);
});
