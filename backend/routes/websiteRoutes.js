const express = require('express');
const router = express.Router();
const { createWebsite, getMyWebsites, updateWebsite, deleteWebsite } = require('../controllers/websiteController');
const { protect } = require('../middleware/authMiddleware');
//for api/websites/
router.route('/')
    .post(protect, createWebsite)
    .get(protect, getMyWebsites);

//for /api/websites/:id
router.route('/:id')
    .put(protect, updateWebsite)
    .delete(protect, deleteWebsite);
module.exports = router;