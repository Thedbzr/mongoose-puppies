var express = require('express');
var router = express.Router();
const puppiesCtrl = require('../controllers/puppies');

// the puppies routes should have the index, show, create, delete, and update routes
// refer to the RESTful CRUD chart!
/* GET Puppies listing. */
router.get('/', puppiesCtrl.index)
// GET /puppies/new
// router.get('/new', puppiesCtrl.new);
// // POST /puppies
// router.post('/', puppiesCtrl.create);


module.exports = router;
