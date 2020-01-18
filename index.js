const Joi = require("joi");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries.js");

//TODO Error handle when adding the same plats twice.

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// GETS
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/plants", db.getPlants);
app.get("/users/:id", db.getUserById);
app.get("/plants/:id", db.getPlantById);

// POSTS
app.post("/users", db.createUser);
app.post("/plants", db.createPlant);

// PUTS
app.put("/users/:id", db.updateUser);
// app.put("/plants/:id", db.updatePlant);

// DELETE
app.delete("/users/:id", db.deleteUser);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
