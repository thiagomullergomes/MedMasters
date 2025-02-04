const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
