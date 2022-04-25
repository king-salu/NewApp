var express = require('express'); // Express web server framework
const searchcontroller = require('../controllers/searchcontroller');
const router = express.Router();

router
.route('/:keyword')
.get(searchcontroller.search);

module.exports = router;