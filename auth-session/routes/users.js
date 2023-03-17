var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

/* GET users listing. */
router.get('/form', controller.formNew);

module.exports = router;
