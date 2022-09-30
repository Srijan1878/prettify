const jwt = require('jsonwebtoken');
const USER = require('../models/userModel');

const validUserToken = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.send({
            status: 200,
            message: 'Your session has expired. Please login again.',
            success:false,
        })
    }
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, process.env.SALT, async(err, payload) => {
        if(err) {
            return res.send({
                status: 200,
                success:false,
                message: 'Your session has expired. Please login again.'
            })  
        }
        const {_id} = payload;
        const userInfo = await USER.findById(_id);
        req.user = userInfo;
        next();
    })
}

module.exports = {
    validUserToken
}