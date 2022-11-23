const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/userModel");

authRouter
    .route("/signup")
    .get(getSignup)
    .post(postSignup);

authRouter
    .route('/login')
    .post(loginUser);

function getSignup(req, res) {
  res.sendFile("/public/index.html", { root: __dirname });
}

async function postSignup(req, res) {

}

async function loginUser(req, res) {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email: email });
        if (user) {
            //check if password matches
            //bcrypt - compare 
            if (password == user.password) {
                res.json({
                  msg: "user logged in",
                });
            }
            else {
                res.json({
                  msg: "wrong credentials",
                });
            }
        }
        else {
            res.json({
                msg: "user not found"
            })
        }
    }
    catch (err) {
        res.json({
            msg: err.message
        })
    }
}

module.exports = authRouter;