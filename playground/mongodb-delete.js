const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

/*    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
        console.log(result);
    });*/

/*    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
        console.log(result);
    });*/

/*
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        console.log(result);
    });
*/
    db.collection('Users').deleteMany({name:'Andrew'});
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5b67e2cdfb8f2104c478cf2c')}).then((result) => {
        console.log(JSON.stringify(result,undefined, 2));
    });


});