const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mogoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b703af26fedb1ac205476e9';
var idUser = '5b702e078e75717c3f07c37d';

/*
Todo.find({
    _id: id
}).then((todos) => {
    if(!todos){
        return console.log('Id not found');
    }
    console.log('Todos', todos)
}, (e) => {
    console.log(e);
});


Todo.findOne({
    _id: id
}).then((todo) => {
    if(!todos){
        return console.log('Id not found');
    }
    console.log('Todo', todo)
}, (e) => {
    console.log(e);
});*/

if(!ObjectID.isValid(id)){
    console.log('Id not valid');

}

if(!ObjectID.isValid(idUser)){
    console.log('Id user not valid');

}
Todo.findById(id).then((todos) => {
    if(!todos){
        return console.log('Id not found');
    }
    console.log('Todos', todos)
}, (e) => {
    console.log(e);
});

User.findById(idUser).then((users) => {
    if(!users){
        return console.log('Id not found');
    }
    console.log('User', users)
}, (e) => {
    console.log(e);
});