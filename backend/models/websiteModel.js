const mongoose = require('mongoose');
const componentSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['hero', 'about', 'services', 'gallery', 'contact', 'footer'],
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
});
const websiteSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name: {
            type: String,
            required: true,
            default: 'My Awesome Website',
        },
        components: [componentSchema],
    },
    {
        timestamps: true,
    }
);
const Website = mongoose.model('Website', websiteSchema);
module.exports = Website;