var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')
const { checkAuth } = require('../utils/utils')

/* GET users listing. */
router.get('/form', checkAuth, controller.formNew)
router.get('/login', controller.formLogin)
router.get('/logout', checkAuth, controller.logout)
router.post('/', checkAuth, controller.create)
router.post('/auth', controller.auth)

module.exports = router;
