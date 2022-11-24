var jwt = require("jsonwebtoken");
const { JWT_KEY } = require("./secrets");

module.exports.protectRoute = function (req, res, next) {    // this is a middleware function that we have created to check whether user is logged in or not
  if (req.cookies.login) {
    let token = req.cookies.login;
    let isVerified = jwt.verify(token, JWT_KEY);
    if (isVerified) next();
    else {
      req.json({
        msg: "user not verified",
      });
    }
  } else {
    return res.json({
      msg: "opertion not allowed",
    });
  }
};