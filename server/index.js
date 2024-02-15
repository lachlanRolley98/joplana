const express = require("express")
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/users')

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://lachlan_rolley:alsk99PL@cluster0.bi7oc5p.mongodb.net/joplanaDatabase?retryWrites=true&w=majority")

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/createUser", async (req, res) => {
  const user = req.body // grab data from frontend
  const newUser = new UserModel(user); // put all the data in the model
  await newUser.save(); // save it to the database

  res.json(user)
})


app.listen(3001, ()=> {
  console.log("SERVER RUNNING")
});

