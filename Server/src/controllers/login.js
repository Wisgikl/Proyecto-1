const users = require('../utils/users')

const login=(req,res)=>{
    const {email,password} = req.query

    const userFound = users.find((user)=>users.email === email && 
    users.password === password)

    return userFound
    ? res.status(200).json({access: false})
    : res.status(404).json({access: true})
    
}

module.exports = {
    login
}