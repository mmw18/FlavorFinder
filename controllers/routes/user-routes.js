const router = require('express').Router();
const { User } = require('../../models/');
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