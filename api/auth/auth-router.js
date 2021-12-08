// Require `checkUsernameFree`, `checkUsernameExists` and `checkPasswordLength`
// middleware functions from `auth-middleware.js`. You will need them here!
const router = require('express').Router();
const User = require("../users/users-model");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const 
{ checkUsernameExists, 
  checkUsernameFree, 
  checkPasswordLength,
} = require("./auth-middleware");

router.post("/register", checkPasswordLength, checkUsernameFree, (req, res, next) => {

      const { username, password } = req.body;
      const hash = bcrypt.hashSync(password, 10);

      User.add({ username, password: hash })
      .then(saved => {
        res.status(201).json(saved);  
      })
      .catch(next);
    })

     
      
    router.post("/login", checkUsernameExists, (req, res, next) => {
     const { password } = req.body;
     if (bcrypt.compareSync(password, req.user.password)) {
       //make it so that the cookie is set on the client
       //make it so server stores a session with a session id
       req.session.user = req.user; //this line of code does the above gives the req.session and cookie
       res.json({ message: `Welcome ${req.user.username}!` });
     } else {
        next({ status: 401, message: "Incorrect password u fucking dingus" })
      }
    });



    



       
      router.get("logout", (req,res, next) => {
        req.session.destroy();
        res.status(200).json({message: "Logged out"});
      })

module.exports = router