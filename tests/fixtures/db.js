const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

const userOneId = new mongoose.Types.ObjectId() 
const userOne = { 

_id : userOneId,
name: 'Mike', 
email: 'mike@example.com', 
password: '56what!!' ,
tokens: [{ 
token: jwt.sign({ _id: userOneId }, "thisismynewcourse") 
}]

} 

const setupDatabase = async () => { 
await User.deleteMany() 
await new User(userOne).save() 
}

module.exports = {
    userOne,
    userOneId,
    setupDatabase
}