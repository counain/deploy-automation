const express = require('express');
const app = express();
const PORT = 8080;

// Set up middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to handle the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
