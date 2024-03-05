const express = require('express')
const login = require('../service/login')
const register = require('../service/register')
const authRoute = express.Router()

authRoute.post('/register' , register)

authRoute.post('/login' , login)

module.exports = authRoute