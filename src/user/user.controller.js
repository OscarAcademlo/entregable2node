const uuid = require('uuid')
const datausers = [{
    
        id: '86a7e67b-01f9-4a48-a270-8db36b759798',
        first_name: 'Ruben',
        last_name: 'Suarez',
        email: 'rs@gmail.com',
        password: '1234',
        birthday: '2000/10/01'
            
},
       { id: '9f8f5391-8a75-4397-a6e9-03ea60e764a2',
        first_name: 'Jose',
        last_name: 'Perez',
        email: 'jose@gmail.com',
        password: '4321',
        birthday: '2000/04/21'
}, 

];

const getAllUsers = ()=>{
    return datausers
}
const getUserById = (id)=>{
    const data = datausers.find(task=>task.id === id)
    return data
}

const createUser = (userBody)=>{
    const newUser = {
        "id": uuid.v4(),
        ...userBody
    }
    datausers.push(newUser)
    return newUser
}

module.exports={
    getAllUsers,
    getUserById,
    createUser
}
