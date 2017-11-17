// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // challenge - deleteMany with name Matti
  // db.collection('Users').deleteMany({name: 'Matti'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5a0d3fea3ee73019786a55e5')
  // }).then((result) => {
  //   console.log(JSON.stringyfy(result, undefined, 2);
  // });

  // db.close();
});
