const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userIP: {
        type: Number,
        required: true,
    },
    vaxTier: Number,
    createdDate: Date,
});

module.exports = mongoose.model('Users', UserSchema);
