const express = require('express')

const router = new express.Router()
const { insertUrl, getUrl } = require('../controller/controller')
router.route('/').post(insertUrl)
router.route('/redirect/').post(getUrl)

module.exports = router
