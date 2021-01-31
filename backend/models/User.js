const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userIP: {
        type: Number,
        required: true,
    },
    vaxTier: Number,
    createdDate: Date.now,
});

module.exports = mongoose.model('Users', UserSchema);
