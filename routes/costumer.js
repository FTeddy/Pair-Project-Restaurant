const express = require('express')
const helper = require('../helper')
const router = express.Router()
const CostumerController = require('../controller/index.js').CostumerController

router.get('/', CostumerController.homepage)
//
router.get('/add', CostumerController.costumerAdd)
router.post('/add', CostumerController.costumerAddPost)

router.get('/edit/:id', CostumerController.costumerEdit)
router.post('/edit/:id', CostumerController.costumerEditPost)

router.get('/delete/:id', CostumerController.costumerDelete)

module.exports = router;
