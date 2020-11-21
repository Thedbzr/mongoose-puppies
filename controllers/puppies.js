const Puppy = require('../models/puppy');


module.exports = {
    index
}

function index(req,res){
    Puppy.find({}, function(err, puppies){
        res.render('puppies/index', { puppies });
    })
}