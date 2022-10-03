const {getAllUsers, getUserById,createUser} = require('./user.controller')
const { get } = require('./user.router')


const getAll = (req,res)=>{
    const data = getAllUsers()
        res.status(202).json(data)
}

const getUserId = (req,res) =>{
    const id = req.params.id
    const data = getUserById(id)
    if(data){
    res.status(200).json(data)
    }else{
        res.status(404).json({message:'User id Not Foud'})
    }
}

const createNewUser = (req,res)=>{
const userBody =req.body
if (userBody){
const data = createUser(userBody)
res.status(201).json(data)
}
}
module.exports={
    getAll,
    getUserId,
    createNewUser
}