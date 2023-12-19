const skill = require('../models/Skills')

const getSkills = async (req, res) => {
    try {
        const skills = await skill.find({})
        return res.status(200).json({
            success: true,
            data: skills
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

const addSkill = async (req, res) => {
    try {
        const newSkill = new skill(req.body)
        await newSkill.save().then(() => {
            return res.status(201).json({
                success: true,
                data: newSkill,
                message: 'Skill added.'
            })
        }).catch(error => {
            return res.status(400).json({
                success: false,
                message: error
            })
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

const updateSkill = async (req, res) => {
    const {id} = req.params
    try {
        const updateSkill = await skill.findByIdAndUpdate(id, req.body)
        if (updateSkill) {
            return res.status(200).json({
                success: true,
                message: 'Skill updated.'
            })
        } else return res.status(404).json({
            success: false,
            message: 'Skill not found.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: data
        })
    }
}

const deleteSkill = async (req, res) => {
    const {id} = req.params
    const deleteSkill = await skill.findByIdAndDelete(id)
    if (deleteSkill) {
        return res.status(200).json({
            success: true,
            message: 'Skill deleted.'
        })
    } else return res.status(404).json({
        success: false,
        message: 'Skill not found.'
    })
}

module.exports = {
    getSkills,
    addSkill,
    updateSkill,
    deleteSkill
}