const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); //for db
const userRoutes = require('./routes/userRoutes');
const websiteRoutes = require('./routes/websiteRoutes');
dotenv.config();
connectDB(); //for db
const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the backend server!' });
});
app.use('/api/users', userRoutes);
app.use('/api/websites', websiteRoutes);

const { notFound, errorHandler } = require('./middleware/authMiddleware');
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend server is running on http://0.0.0.0:${PORT}`);
});