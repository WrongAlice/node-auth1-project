// Require `checkUsernameFree`, `checkUsernameExists` and `checkPasswordLength`
// middleware functions from `auth-middleware.js`. You will need them here!
const express = require("express");
const router = express.Router();
const User = require("../users/users-model");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const {restricted, checkUsernameExists, checkUsernameFree, checkPasswordLength} = require("./auth/auth-middleware");

router.post("register", async (req, res) => {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.add({...req.body, password: hash});
      req.session.user = newUser;
      res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ message: "Error registering new user" });
        }
        });
      
      
      router.post("login", checkUsernameExists, async (req, res) =>
      try {
        const verifiedUser = await User.findBy({ username: req.body.username });
        const passwordValid = await bcrypt.compare(req.body.password, user.password);
        if (!passwordValid) {
          res.status(401).json({ message: "Invalid Password" });
        } else {
          req.session.user = verifiedUser;
          res.status(200).json(verifiedUser);
        }
      }
       
      router.get("logout", (req,res) => {
        req.session.destroy();
        res.status(200).json({message: "Logged out"});
      });

    


module.exports = router;

      
      
      
      
      **
  1 [POST] /api/auth/register { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "user_id": 2,
    "username": "sue"
  }

  response on username taken:
  status 422
  {
    "message": "Username taken"
  }

  response on password three chars or less:
  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
 */


/**
  2 [POST] /api/auth/login { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "message": "Welcome sue!"
  }

  response on invalid credentials:
  status 401
  {
    "message": "Invalid credentials"
  }
 */


/**
  3 [GET] /api/auth/logout

  response for logged-in users:
  status 200
  {
    "message": "logged out"
  }

  response for not-logged-in users:
  status 200
  {
    "message": "no session"
  }
 */

 
// Don't forget to add the router to the `exports` object so it can be required in other modules
