const asyncHandler = require('express-async-handler');
const Website = require('../models/websiteModel');
// @desc    Create a new website
// @route   POST /api/websites
// @access  Private
const createWebsite = asyncHandler(async (req, res) => {
    const { name } = req.body;

    const website = new Website({
        name: name || 'My New Website',
        user: req.user._id,
        components: [],
    });
    const createdWebsite = await website.save();
    res.status(201).json(createdWebsite);
});
// @desc    Get all websites for a user
// @route   GET /api/websites
// @access  Private
const getMyWebsites = asyncHandler(async (req, res) => {
    const websites = await Website.find({ user: req.user._id });
    res.json(websites);
});
// @desc    Update a website
// @route   PUT /api/websites/:id
// @access  Private
const updateWebsite = asyncHandler(async (req, res) => {
    const { name, components } = req.body;
    const website = await Website.findById(req.params.id);
    if (website) {
        //for security check
        if (website.user.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error('Not authorized to update this website');
        }
        website.name = name || website.name;
        website.components = components || website.components;
        const updatedWebsite = await website.save();
        res.json(updatedWebsite);
    } else {
        res.status(404);
        throw new Error('Website not found');
    }
});
// @desc    Delete a website
// @route   DELETE /api/websites/:id
// @access  Private
const deleteWebsite = asyncHandler(async (req, res) => {
    const website = await Website.findById(req.params.id);
    if (website) {
        if (website.user.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error('Not authorized to delete this website');
        }
        await website.deleteOne();
        res.json({ message: 'Website removed' });
    } else {
        res.status(404);
        throw new Error('Website not found');
    }
});

module.exports = { createWebsite, getMyWebsites, updateWebsite, deleteWebsite };