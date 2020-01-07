const Joi = require('joi');
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const db = require('./queries.js');


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// const users = [
//     {uID: 1, name: 'johannes', email: 'johannes.thessen@gmail.com'},
//     {uID: 2, name: 'qwerqwer', email: 'asdfasdf@gmail.com'},
//     {uID: 3, name: 'qwerqwer', email:  'qwerqwer.thessen@gmail.com'}
// ];

// GETS
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);

// app.get('/', (req,res) => {
//     res.send('Hello world!!!!');
// });

// app.get('/plants', (req,res) => {
//     res.send([1,2,3]);
// });

// app.get('/collection', (req,res) => {
//     res.send([1,2,3]);
// });

// app.get('/api/users/', (req, res) => {
//     res.send(users);
// });

// app.get('/api/users/:user', (req, res) => {
//     const user = users.find(u => u.uID === parseInt(req.params.user));
//     if (!user) return res.status(404).send('The user with the given ID was not found.');

//     res.send(user);
// });


// POSTS
app.post('/users', db.createUser);

// app.post('/api/users', (req, res) => {
//     //User input validation
//     const schema = {
//         name: Joi.string().min(3).required(),
//         email: Joi.string().email({minDomainAtoms: 2}).required(),
//     };

//     const { error } = validateUser(req.body); //result. error

//     if (error) return res.status(400).send(error.details[0].message);

//     const user = {
//         uID: users.length + 1,
//         name: req.body.name,
//         email: req.body.email
//     };

//     users.push(user);
//     res.send(user)
// });


// PUT

app.put('/users/:id', db.updateUser);

// app.put('/api/users/:user', (req, res) => {
//     // Look up the user
//     // If not existing, return 404
//     const user = users.find(u => u.uID === parseInt(req.params.user));
//     if (!user) return res.status(404).send('The user with the given ID was not found.');
//     // Validate
//     // If invalid, return 400 - Bad request

//     const { error } = validateUser(req.body); //result.error

//     if (error) return res.status(400).send(error.details[0].message);


//     // Update user
//     // Return the updated user
//     user.name = req.body.name;
//     user.email = req.body.email;
// });


// DELETE

app.delete('/users/:id', db.deleteUser);

// app.delete('/api/users/:user', (req, res) => {
//     // Look up the user
//     // Not existing, return 404
//     const user = users.find(u => u.uID === parseInt(req.params.user));
//     if (!user) return res.status(404).send('The user with the given ID was not found.');

//     const index = users.indexOf(user);
//     users.splice(index, 1);
//     // Delete

//     // Return the same course
//     res.send(user);
// });

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));


