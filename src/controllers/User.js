const user = require('../models/User')

const getUsers = async (req, res) => {
    try {
        const users = await user.find({})
        return res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

const addUser = async (req, res) => {
    try {
        const userAdd = new user(req.body)
        await userAdd.save().then(() => {
            return res.status(201).json({
                success: true,
                data: userAdd,
                message: 'User Information Added'
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

const updateUser = async (req, res) => {
    const { id } = req.params
    try {
        const updateUser = await user.findByIdAndUpdate(id, req.body)
        if (updateUser) {
            return res.status(200).json({
                success: true,
                message: "User information updated."
            })
        } else return res.status(404).json({ success: false, message: 'User not found!' })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

module.exports = {
    getUsers,
    addUser,
    updateUser
}