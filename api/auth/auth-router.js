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

router.post("register", checkPasswordLength, checkUsernameFree, async (req, res, next) => {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.add({...req.body, password: hash});
      req.session.user = newUser;
      res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ message: "Error registering new user" });
        }
        });
      
      
    router.post("login", checkUsernameExists, async (req, res, next) => {
      try {
        const verifiedUser = await User.findBy({ username: req.body.username });
        const passwordValid = await bcrypt.compare(req.body.password, user.password);
        if (!passwordValid) {
          res.status(401).json({ message: "Invalid Password" });
        } 
          else {
          req.session.user = verifiedUser;
          res.status(200).json(verifiedUser);
        }
      } catch (error) {
        res.status(500).json({ message: "Error logging in" });
      }
    });

    



       
      router.get("logout", (req,res, next) => {
        req.session.destroy();
        res.status(200).json({message: "Logged out"});
      })





    


module.exports = router