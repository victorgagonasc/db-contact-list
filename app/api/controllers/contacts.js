const contactModel = require('../models/contacts');
const userModel = require('../models/users');

module.exports = {

    create: function (req, res, next) {
        contactModel.create({
            userId: req.body.userId,
            name: req.body.name,
            email: req.body.email,
            mobilePhone: req.body.mobilePhone,
            homePhone: req.body.homePhone,
            obs: req.body.obs
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "Contato adicionado com sucesso",
                    data: null
                });
        });
    },

    getById: function (req, res, next) {
        console.log(req.body);
        contactModel.findById(req.params.contactId, function (err, contactInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Contato encontrado com sucesso", data: { contato: contactInfo } });
            }
        });
    },

    getAll: function (req, res, next) {
        contactModel.find({}, function (err, contacts) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Lista de contatos encontrada com sucesso", data: { contacts: contacts } });
            }
        });
    },

    updateById: function (req, res, next) {
        contactModel.findByIdAndUpdate(req.params.contactId, {
            name: req.body.name,
            email: req.body.email,
            mobilePhone: req.body.mobilePhone,
            homePhone: req.body.homePhone,
            obs: req.body.obs
        }, function (err, contactInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Contato atualizado com sucesso", data: null });
            }
        });
    },

    deleteById: function (req, res, next) {
        contactModel.findByIdAndRemove(req.params.contactId, function (err, contactInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Contato removido com sucesso", data: null });
            }
        });
    }
}