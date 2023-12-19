const contact = require('../models/Contact')

const getContact = async (req, res) => {
    try {
        const contacts = await contact.find({})
        return res.status(200).json({
            success: true,
            data: contacts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

const addContact = async (req, res) => {
    try {
        const addContact = new contact(req.body)
        addContact.save().then(() => {
            return res.status(201).json({
                success: true,
                data: addContact,
                message: 'Contact added.'
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

const updateContact = async (req, res) => {
    try {
        const { id } = req.params
        const updateContact = await contact.findByIdAndUpdate(id, req.body)
        if (updateContact) {
            return res.status(200).json({
                success: true,
                message: 'Contact updated.'
            })
        } else return res.status(404).json({
            success: false,
            message: 'Contact not found.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }

}

module.exports = {
    getContact,
    addContact,
    updateContact
}