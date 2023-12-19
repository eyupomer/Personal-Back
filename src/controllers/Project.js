const project = require('../models/Project')

const getProjects = async (req, res) => {
    try {
        const projects = await project.find({})
        return res.status(200).json({
            success: true,
            data: projects,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

const addProject = async (req, res) => {
    try {
        const projectAdd = new project(req.body)
        await projectAdd.save().then(() => {
            return res.status(201).json({
                success: true,
                data: projectAdd,
                message: 'Project added.'
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

const updateProject = async (req, res) => {
    const {id} = req.params
    try {
        const updateProject = await project.findByIdAndUpdate(id, req.body)
        if(updateProject) {
            return res.status(200).json({
                success: true,
                message: 'Project updated.'
            })
        } else return res.status(404).json({
            success: false,
            message: 'Project not found.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

const deleteProject = async (req, res) => {
    const {id} = req.params
    try {
        const deleteProject = await project.findByIdAndDelete(id)
        if(deleteProject) {
            return res.status(200).json({
                success:true,
                message: 'Project deleted.'
            })
        }else return res.status(404).json({
            success: false,
            message: 'Project not found'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

module.exports = {
    getProjects,
    addProject,
    updateProject,
    deleteProject
}