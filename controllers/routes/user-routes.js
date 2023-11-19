const router = require('express').Router();
const { User } = require('../../models/');

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

router.post('/login', async (req,res) => {
    console.log(req.body);
    
    
    console.log('check user password');
    //check user password
    const checkUser = await User.findOne({ where: { email: req.body.email } });
    console.log(checkUser);
    if (checkUser === null) {
      console.log('Not found!');
    } else {
      console.log('User found');     
    }
})


module.exports = router;