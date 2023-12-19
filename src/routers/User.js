const express = require('express')
const router = express.Router()
const userController = require('../controllers/User')

router.get('/', userController.getUsers)
router.post('/', userController.addUser)
router.put('/:id', userController.updateUser)

module.exports = router