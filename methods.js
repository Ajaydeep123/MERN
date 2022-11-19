const express = require('express');
const app = express();
app.use(express.json());
let user = [
    {
      id: 1,
      name: "Ajaydeep",
      age: 100,
    },
    {
      id: 2,
      name: "amisha",
      age: 10,
    },
    {
      id: 3,
      name: "Anuj",
      age: 50,
    },
  ];


//Code without mini app/ W/o mounting  

// //with query
// app.get('/user', (req, res) => {
//     // res.send(user);
//     console.log(req.query);
//     let { name, age } = req.query;
//     let filteredData=user.filter(userObj => {
//         return (userObj.name==name && userObj.age==age)
//     })
//     res.send(filteredData);
// })

// app.post('/user', (req, res) => {
//     console.log(req.body.Name);
//     //then i can put this in db 
//     user = req.body;
//     res.json({
//         message: "Data received successfully",
//         user: req.body
//     });
// });

// app.patch('/user', (req, res) => {
//     console.log(req.body);
//     let dataToBeUpdated = req.body;
//     for (key in dataToBeUpdated) {
//         user[key] = dataToBeUpdated[key];
//     }
//     res.json({
//         message: "data updated succesfully"
//     })
// });

// app.delete('/user', (req, res) => {
//     user = {};
//     res.json({
//         msg: "user has been deleted"
//     });
// })

// //params
// app.get('/user/:name', (req, res) => {
//     console.log(req.params.name);
//     //let {id}=req.params;
//     // let user = db.findOne(id);
//     res.json({ msg: "user id is ", "obj": req.params });
// });

// with MOUNTING

// We create separate routes and their respective request functions


const userRouter = express.Router();
const authRouter = express.Router();
app.use('/user', userRouter);
app.use("/auth", authRouter);


// these run as per the request made via postman, all others will be ignored.
userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

    // in case params
userRouter
    .route("/:name")
    .get(getUserById);

authRouter
    .route('/signup')
    .get()
.post()



function getUser(req, res){
    console.log(req.query);
    let { name, age } = req.query;
    // let filteredData=user.filter(userObj => {
    //     return (userObj.name==name && userObj.age==age)
    // })
    // res.send(filteredData);
    res.send(user);
}

function postUser(req, res){
    console.log(req.body.Name);
    //then i can put this in db 
    user.push(req.body);
    res.json({
        message: "Data received successfully",
        user: req.body
    });
}

function updateUser(req, res){
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated succesfully"
    })
}

function deleteUser(req, res){
    user = {};
    res.json({
        msg: "user has been deleted"
    });
}

function getUserById(req, res){
    console.log(req.params.name);
    //let {id}=req.params;
    // let user = db.findOne(id);
    res.json({ msg: "user id is ", "obj": req.params });
}



app.listen(5000);