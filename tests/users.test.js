const request = require('supertest') 
const app = require('../src/app') 
const User = require('../models/user')
const {userOne , userOneId , setupDatabase} = require('./fixtures/db')



beforeEach(setupDatabase)


test('Should signup a new user', async () => { 
await request(app).post('/users').send({ 
name: 'Andrew', 
email: 'andrew@example.com', 
password: 'MyPass777!' 
}).expect(201) 
})

test('Should login existing user', async () => { 
await request(app).post('/users/login').send({ 
email: userOne.email, 
password: userOne.password 
}).expect(200) 
}) 

test('Should not login wrong user', async () => { 
await request(app).post('/users/login').send({ 
email: userOne.email, 
password: 'hsjskisk'
}).expect(400) 
}) 

test('Should get profile for user', async () => { 
await request(app) 
.get('/users/me') 
.set('Authorization', `Bearer ${userOne.tokens[0].token}`) 
.send() 
.expect(200) 
}) 

test('should update user ' , async ()=>{
    await request(app)
    .patch('/users/me')
    .set('Authorization' , `Bearer ${userOne.tokens[0].token}`)
    .send({
        name : "john"
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toEqual('john')

    })



