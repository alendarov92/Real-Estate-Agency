const router = require('express').Router();

const authService = require('../services/authServices')


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
        router.post('/register', async (req, res) => {
        
            const { password, repeatePassword, ...userData } = req.body;
        
            // if (password !== repeatePassword) {
            //     return res.render('auth/register', { error: 'Password dont mach!' })
            // }
        
            try {
                await authService.create({ password, ...userData });
            
                res.redirect('/')
            
            } catch (error) {
                return res.render('auth/register', { error: 'db error' })
            
            }
        
        })

// ========> LOGOUT
module.exports = router;
