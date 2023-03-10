var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

router.post('/login', controller.login)

module.exports = router;
