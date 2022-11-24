const express = require("express");
const userRouter = express.Router();
// const { getUsers, postUser, updateUser, deleteUser, getUserById, setCookies, getCookies } = require("../controller/userController");
const { getUser, postUser, updateUser, deleteUser, getAllUser} = require("../controller/userController");

const {protectRoute} = require('../helper');

//options for user
userRouter
//   .route("/")
//   .get(protectRoute, getUsers)
//   .post(postUser)
  .route('/:id')
  .patch(updateUser)
  .delete(deleteUser);

// userRouter
//     .route("/setcookies")
//     .get(setCookies);

// userRouter
//     .route("/getcookies")
//     .get(getCookies);
//profile page
    app.use(protectRoute)
    userRouter
    .route('/userProfile')
    .get(getUser)

//admin specific function
    app.use(isAuthorised(['admin']));
    userRouter.route('')
    .get(getAllUser)   

    
// userRouter
//     .route("/:name")
//     .get(getUserById);

module.exports = userRouter;