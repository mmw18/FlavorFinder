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


// router.post('/login', async (req, res) => {
//   try {
//       // Check if user exists with the provided email
//       const user = await User.findOne({ where: { email: req.body.email } });

//       if (!user) {
//           // If user not found, send an appropriate response
//           res.status(401).send('Login failed.');
//       } else {
//           // User found, now check the password
//           const validPassword = user.checkPassword(req.body.password);

//           if (validPassword) {
//               console.log('Login successful');
//               // Handle successful login here (e.g., creating a session)
//               res.json({ success: true, message: 'Login successful' });
//               // res.send('Login successful');
//           } else {
//               // If password does not match, send an appropriate response
//               res.status(401).send('Login failed.');
//           }
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
//       res.status(500).send('Server error during login');
//   }
// });

router.get('/authenticated', (req, res) => {
  // Ensure the user is authenticated
  if (req.isAuthenticated()) { // or your authentication check
      res.render('authenticated'); // Render authenticated page
  } else {
      res.redirect('/login'); // Redirect to login if not authenticated
  }
});

module.exports = router;