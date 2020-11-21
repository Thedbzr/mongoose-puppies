const mongoose = require('mongoose');
const Schema = mongoose.Schema
// the PuppySchema should have:
// a name property (String), 
// an age property (Number),
// and a breed property (String),
// if you are trendy, give it timestamps too!

const puppySchema = new Schema ({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    breed: {
        type: String
    }
}, {
    timestamps: true
});

// don't forget to export it!
module.exports = mongoose.model('puppy', puppySchema);
