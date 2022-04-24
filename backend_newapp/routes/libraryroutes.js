var express = require('express'); // Express web server framework
const libraryController = require('../controllers/librarycontroller');
const router = express.Router();

router
.route('/')
.get(libraryController.new_release);

module.exports = router;