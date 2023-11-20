const router = require('express').Router();
const { User } = require('../../models/');
const passport = require('passport');
require('../../config/passport-config')(passport); // Adjust path as needed

router.post('/listening_endpoint', async (req, res) => {
  try {
console.log("I was called becuase someone entered /listening_endpoint path")
  } catch {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

router.post('/register', async (req, res) => {
    try {
        // req.body should contain the name, email, and password
        const newUser = await User.create(req.body);
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
});

//create route handler to return login view
//create post request handler to allow user to login
    //check user crendial in database
    //if have right pass, direct to hompage
    //wrong pass, display wrong pass message
//create post request handler to allow user to signup
router.get('/login', (req,res) => {
    console.log("call login path");
    res.render('login');
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Server error.' });
    }
    if (!user) {
      return res.status(401).json({ success: false, message: 'Login failed.' });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Server error during login.' });
      }
      return res.json({ success: true, message: 'Login successful.' });
    });
  })(req, res, next);
});

router.get('/authenticated', (req, res) => {
  // Ensure the user is authenticated
  if (req.isAuthenticated()) { // or your authentication check
      res.render('authenticated'); // Render authenticated page
  } else {
      res.redirect('/login'); // Redirect to login if not authenticated
  }
});

module.exports = router;