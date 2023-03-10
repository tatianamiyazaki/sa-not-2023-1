var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')

router.get('/', controller.retrieve)


module.exports = router;


