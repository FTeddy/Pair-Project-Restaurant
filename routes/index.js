const express = require('express')
const helper = require('../helper')
const router = express.Router()
const Controller = require('../controller/index.js').Controller

router.use('/menu', require('./menu.js'))
router.use('/costumer', require('./costumer.js'))
router.use('/invoice', require('./invoice.js'))
router.use('/invoicemenu', require('./invoicemenu.js'))

router.get('/', Controller.home)
router.get( '/login', helper.isLogout, Controller.login)
router.post('/login', helper.isValidate, Controller.loginSuccesful)
router.get('/logout', helper.loggingOut,  Controller.logout)

module.exports = router;
