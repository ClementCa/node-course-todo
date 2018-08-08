//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
/*
const {MongoClient, ObjectID} = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);
*/



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err){
        return console.log('Unable to connect');
    }
    const db = client.db('TodoApp');
/*
    db.collection('Todos').find({_id:new ObjectID('5b6a79a1a678099cb1efc263')}).toArray()
        .then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2))
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
    console.log('Connected to MongoDBServer');*/

/*
        db.collection('Todos').find({_id:new ObjectID('5b6a79a1a678099cb1efc263')}).count()
            .then((count) => {
                console.log(`Todos count: ${count}`);
                console.log(JSON.stringify(docs, undefined, 2))
            }, (err) => {
                console.log('Unable to fetch todos', err);
            });
        console.log('Connected to MongoDBServer'); */


        db.collection('Users').find({name:'Andrew'}).toArray()
            .then((docs) => {
                console.log(`Todos count: ${docs}`);
                console.log(JSON.stringify(docs, undefined, 2))
            }, (err) => {
                console.log('Unable to fetch todos', err);
            });
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