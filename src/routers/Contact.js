const express = require('express')
const router = express.Router()
const contactController = require('../controllers/Contact')

router.get('/', contactController.getContact)
router.post('/', contactController.addContact)
router.put('/:id', contactController.updateContact)

module.exports = router