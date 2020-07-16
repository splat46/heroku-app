const express = require("express");
const { Router } = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
app.use(express.json());

// Get user
app.get("/users", async (req, res) => {
  //console.log("HI IS IT WORKING?");

  try {
    const users = await User.findAll();
    //console.log("All Users?", users);

    res.json(users);
  } catch (error) {
    res.status(400).send({ message: "Error in getting users" });
  }
});

app.post("/users", (req, res) => {
  //console.log("TESTING!!");
  console.log(req.body);
});

// Create new user account

app.listen(PORT, () => console.log("server started in port", PORT));
