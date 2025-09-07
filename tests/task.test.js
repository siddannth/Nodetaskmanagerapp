const request = require('supertest') 
const app = require('../src/app') 
const Task = require('../models/tasks')
const {userOne , userOneId , setupDatabase} = require('./fixtures/db')
const { beforeEach } = require('node:test')



beforeEach(setupDatabase)


test('test add task' , async ()=>{

     await request(app).
  
    post('/tasks')
     .set('Authorization' , `Bearer ${userOne.tokens[0].token}`).send({
        description : "do chores"
    })
   .expect(201)

})