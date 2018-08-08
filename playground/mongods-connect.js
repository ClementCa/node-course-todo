//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect');
    }

    console.log('Connected to MongoDBServer');
});
/*MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
/!*    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) =>{
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))

    });*!/

    db.collection('Users').insertOne({
        name: 'Clement',
        age: '20',
        location:'Toulouse'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert ', err);
        }
        console.log(result.ops);
    });

    client.close();
})*/;