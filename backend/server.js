// backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the backend server!' });
});
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});