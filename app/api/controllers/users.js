const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    create: function (req, res, next) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "User added successfully",
                    data: null
                });
        });
    },

    authenticate: function (req, res, next) {
        userModel.findOne({
            email: req.body.email
        }, function (err, userInfo) {
            if (err)
                next(err);
            else {
                if (!userInfo)
                    res.status(404).json({
                        status: "error",
                        message: "User not found",
                        data: null
                    });
                else if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign(
                        { id: userInfo._id },
                        req.app.get('secretKey'),
                        { expiresIn: 120 }
                    );

                    res.json({
                        status: "success",
                        message: "User found",
                        data: { user: userInfo, token: token, expiresIn: 120 }
                    });
                } else {
                    res.status(401).json({
                        status: "error",
                        message: "Invalid email/password",
                        data: null
                    });
                }
            }
        });
    }
}