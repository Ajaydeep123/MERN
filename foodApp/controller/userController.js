const userModel = require('../models/userModel');

// module.exports.getUsers = async function (req, res) {
//   console.log(req.query);
//   // let { name, age } = req.query;
//   // let filteredData=user.filter(userObj => {
//   //     return (userObj.name==name && userObj.age==age)
//   // })
//   // res.send(filteredData);

//   //get all users from db
//   let allUsers = await userModel.find();

//   res.json({ msg: "users retrieved", allUsers });
//   // console.log("getUser called ");
//   // next();
// }

module.exports.getUser = async function (req, res) {
  try {
    let id = req.id;
    let user = await userModel.findById(id);

    res.json({ msg: "users retrieved", user });
  }
  catch (err) {
     res.json({
       msg: err.message,
     });
  }
};

// module.exports.postUser=function (req, res) {
//   console.log(req.body.Name);
//   //then i can put this in db
//   user.push(req.body);
//   res.json({
//     message: "Data received successfully",
//     user: req.body,
//   });
// }

// module.exports.updateUser=async function (req, res) {
//   console.log(req.body);
//   let dataToBeUpdated = req.body;
//   // for (key in dataToBeUpdated) {
//   //   user[key] = dataToBeUpdated[key];
//   // }
//   let doc = await userModel.findOneAndUpdate(
//     { email: "abc@gmail.com" },
//     dataToBeUpdated
//   );
//   res.json({
//     message: "data updated succesfully",
//   });
// }

module.exports.updateUser = async function (req, res) {
  console.log(req.body);
  let id = req.params.id;
  let user = await userModel.findById(id);
  let dataToBeUpdated = req.body;
  // for (key in dataToBeUpdated) {
  //   user[key] = dataToBeUpdated[key];
  // {
  //   name: "Abhi",
  //   email: 'abc@gmail.com'
  // }
  try {
    if (user) {
      const keys = []; //['name','email]
      for (let key in dataToBeUpdated) {
        keys.push(key);
      }
      for (let i = 0; i < keys.length; i++) {
        user[keys[i]] = dataToBeUpdated[keys[i]];
        //name=Abhi
      }
      const updatedData = await user.save();
      res.json({
        message: "data updated succesfully",
        updatedData,
      });
    }
    else {
      res.json({
        message: "user not found",
      });
    }
  }
  catch (err) {
    res.json({
      message: err.message,
    });
  }
};




// module.exports.deleteUser=async function (req, res) {
//   // user = {};
//   // let doc = await userModel.deleteOne({ email: "abcd@gmail.com" });
//   // let doc = await userModel.findOneAndRemove({ email: "abcde@gmail.com" });
//   let user = await userModel.findOne({ email: "abc@gmail.com" });
//   console.log(user);
//   let del = await user.remove();
//   console.log(del);
//   res.json({
//     msg: "user has been deleted",
//   });
// }

module.exports.deleteUser = async function (req, res) {
  try {
    let id = req.params.id;
    // let doc = await userModel.deleteOne({ email: "abcd@gmail.com" });
    // let doc = await userModel.findOneAndRemove({ email: "abcde@gmail.com" });
    let user = await userModel.findByIdAndDelete(id);
    res.json({
      msg: "user has been deleted",
      user
    });
  }
  catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports.getAllUser = async function (req, res) {
  try {
    let allUsers = await userModel.find();
    res.json({
      msg: "user id is ",
      allUsers,
    });
  }
  catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

// module.exports.getUserById=function(req, res) {
//   console.log(req.params.name);
//   //let {id}=req.params;
//   // let user = db.findOne(id);
//   res.json({ msg: "user id is ", obj: req.params });
// }

// module.exports.setCookies=function(req, res) {
//   // res.setHeader('Set-Cookie', 'isLoggedIn=true');
//   res.cookie("isLoggedIn", false, { maxAge: 10000, secure: true });
//   res.cookie("password", 12345678, { secure: true });
//   res.send("cookies has been set");
// }

// module.exports.getCookies=function(req, res) {
//   let cookies = req.cookies;
//   console.log(cookies);
//   res.send("cookies received");
// }