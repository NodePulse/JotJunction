const express = require('express')
const { userController } = require('../controllers/user.controller')

const userRouter = express.Router()

userRouter.get('/test', userController)

module.exports = userRouter