const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const db_link  = require('./secrets');
let user = [
  {
    id: 1,
    name: "Ajaydeep",
    age: 100,
  },
  {
    id: 2,
    name: "Amisha Singh",
    age: 10,
  },
  {
    id: 3,
    name: "Anuj",
    age: 50,
  },
];
const userRouter = express.Router();
const authRouter = express.Router();
app.use("/user", userRouter);
app.use("/auth", authRouter);
userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter.route("/:name").get(getUserById);

authRouter.route("/signup").get(getSignup).post(postSignup);
//with query
// app.get('/user', )

// app.post('/user', );
// app.patch('/user', );
// app.delete('/user', )
//params
// app.get('/user/:name', );
function getUser(req, res) {
  console.log(req.query);
  let { name, age } = req.query;
  // let filteredData=user.filter(userObj => {
  //     return (userObj.name==name && userObj.age==age)
  // })
  // res.send(filteredData);
  res.send(user);
}
function postUser(req, res) {
  console.log(req.body.Name);
  //then i can put this in db
  user.push(req.body);
  res.json({
    message: "Data received successfully",
    user: req.body,
  });
}
function updateUser(req, res) {
  console.log(req.body);
  let dataToBeUpdated = req.body;
  for (key in dataToBeUpdated) {
    user[key] = dataToBeUpdated[key];
  }
  res.json({
    message: "data updated succesfully",
  });
}
function deleteUser(req, res) {
  user = {};
  res.json({
    msg: "user has been deleted",
  });
}
function getUserById(req, res) {
  console.log(req.params.name);
  //let {id}=req.params;
  // let user = db.findOne(id);
  res.json({ msg: "user id is ", obj: req.params });
}

function getSignup(req, res) {
    res.sendFile("/public/index.html", { root: __dirname });
}

function postSignup(req, res) {
    let { email, name, password } = req.body;
    console.log(req.body);
    res.json({
        msg: "user signed up",
        email,
        name,
        password
    })
}

app.listen(5000);
// http://localhost:5000/auth/signup--

mongoose.connect(db_link)
    .then(function (db) {
        console.log("db connected");
        // console.log(db);
    })
    .catch(function (err) {
        console.log(err);
    });