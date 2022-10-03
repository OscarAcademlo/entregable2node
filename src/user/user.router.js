const router = require('express').Router()
const userServices = require('./user.services')

router.get('/user',userServices.getAll)

router.get('/user/:id',userServices.getUserId)

router.post('/user',userServices.createNewUser)

module.exports=router