const User = require('../users/users-model');

/*
  If the user does not have a session saved in the server

  status 401
  {
    "message": "You shall not pass!"
  }
*/
function restricted( req, res, next ) {
 if (req.session.user) { // if the user has a session saved in the server. no cookie no session
    next(); // allow them to continue
  } else {// if the user does not have a session saved in the server
    next({ status: 401, message: 'You shall not pass!' }); // send them to the login page
  }
}


/*
  If the username in req.body already exists in the database

  status 422
  {
    "message": "Username taken"
  }
*/
async function checkUsernameFree ( req, res, next) {
  try {
    const users = await User.findBy({ username: req.body.username })
    if ( !users.length) {
      next()
    }
    else {
      next({ "message": "Username taken", status: 422 }) 
    }
  } catch (err) {
    next(err)

  }
}
/*
  If the username in req.body does NOT exist in the database

  status 401
  {
    "message": "Invalid credentials"
  }
*/
 async function checkUsernameExists ( req, res, next){
  try {
    const users = await User.findBy({ username: req.body.username });
  
    if ( users.length ) {
      next()
    }
    else {
      next({ "message": "Invalid credentials", status: 401 })
    }
  } catch (err) {
    next(err)
  }
}



/*
  If password is missing from req.body, or if it's 3 chars or shorter

  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
*/
function checkPasswordLength ( req, res, next) { 
  if (!req.body.password || req.body.password < 3) {
    next({ message: "Password must be longer than 3 characters", status: 422 })
  } else {
    next()
  }
  }



// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  restricted,
  checkUsernameFree,
  checkUsernameExists,
  checkPasswordLength,
};


//please write a function called lastElement that accepts a single array argument. the function
//should return the last element of the array. if the array is empty, return undefined.

