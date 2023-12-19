const express = require('express')
const router = express.Router()
const skillController = require('../controllers/Skills')

router.get('/', skillController.getSkills)
router.post('/', skillController.addSkill)
router.put('/:id', skillController.updateSkill)
router.delete('/:id', skillController.deleteSkill)

module.exports = router