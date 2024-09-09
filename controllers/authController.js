const router = require('express').Router();



// ========> LOGIN

router.get('/login', (req, res) => {
   res.render('auth/login')
})


// ========> REGISTER
// Get the page
router.get('/register', (req, res) => {
   res.render('auth/register')
});
// Make the actions
router.post('/register', (req, res) => {
   
   const {name, username, password, repeatePassword} = req.body;

   if (password !== repeatePassword) {
      return res.render('auth/register', {error: 'Password dont mach!'})
   }
   res.end()
})

// ========> LOGOUT
module.exports = router;
