const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

/*    db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5b6a831ca678099cb1efc426')}, {
        $set:{
            completed:true
        }
    }, {
        returnOriginal:false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });*/

    db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b6a7d7da678099cb1efc33f')}, {
        $inc:{
            age:1
        }
    }, {
        returnOriginal:false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });


});