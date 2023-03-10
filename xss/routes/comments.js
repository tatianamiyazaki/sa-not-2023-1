var express = require('express');
var router = express.Router();
const controller = require('../controllers/comments')

router.post('/', controller.create)

module.exports = router;
