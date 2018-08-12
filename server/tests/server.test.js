
const {ObjectID} = require('mongodb');
const expect = require('expect');
const request = require('supertest');


const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
},  {
    _id: new ObjectID(),
    text : 'Second test todo'
}];

beforeEach((done) => {
   Todo.remove({}).then(() =>{
       Todo.insertMany(todos);
   }).then(() => done())
});

describe('Post /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=> {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e))
            });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e))
            })
    })
});



describe('Get /todos', () => {
    it('should get all todos', (done) => {
        var text = 'Test todo text';

        request(app)
            .get('/todos')
            .send()
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
                // expect(res.body.todos).toBe(todos);
            })
            .end(done);
    });

});

describe('Get /todos/:id', () => {
    it('should return todo doc', (done) => {
        var text = 'Test todo text';

        request(app)
            .get(`/todos/${todos[0]._id.toString()}`)
            .send()
            .expect(200)
            .expect((res) => {
                console.log(res.body.todo);
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });



    it('should return 404 for non-object ids', (done) =>{
        request(app)
            .get(`/todos/12345`)
            .send()
            .expect(404)
            .end(done);
    });

});