const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
module.exports = router;