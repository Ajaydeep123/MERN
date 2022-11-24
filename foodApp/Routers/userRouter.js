const express = require("express");
const userRouter = express.Router();
// const { getUsers, postUser, updateUser, deleteUser, getUserById, setCookies, getCookies } = require("../controller/userController");
const { getUser, postUser, updateUser, deleteUser, getAllUser} = require("../controller/userController");

const {isAuthorised,protectRoute} = require('../helper');
const { signup, login } = require('../controller/authController');
//options for user
userRouter
//   .route("/")
//   .get(protectRoute, getUsers)
//   .post(postUser)
  .route('/:id')
  .patch(updateUser)
  .delete(deleteUser);


  userRouter
  .route("/login")
  .post(login);

  userRouter
  .route("/signup")
  .post(signup);


// userRouter
//     .route("/setcookies")
//     .get(setCookies);

// userRouter
//     .route("/getcookies")
//     .get(getCookies);

//profile page
    userRouter.use(protectRoute)
    userRouter
    .route('/userProfile')
    .get(getUser)

//admin specific function
    userRouter.use(isAuthorised(['admin']));
    userRouter.route('')
    .get(getAllUser)   

    
// userRouter
//     .route("/:name")
//     .get(getUserById);

module.exports = userRouter;