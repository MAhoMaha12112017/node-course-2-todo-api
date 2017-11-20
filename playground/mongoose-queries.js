const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5a0fa0226e145b002afa73b4';

// var id = '5a1246b4ff74599c1e092ebe11';
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => { //.catch((e) => console.log(e));
  console.log(e);
});
