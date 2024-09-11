const router = require('express').Router();

const authService = require('../services/authServices')
const { COOKIE_SESSION_NAME } = require('../constants');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');

// ========> LOGIN

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login')
})

router.post('/login', isGuest,  async (req, res) => {
    const { username, password } = req.body;
    const user = await authService.login(username, password);
    const token = await authService.createToken(user)

    res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true })

    res.redirect('/')
})


// ========> REGISTER
// Get the page
router.get('/register', isGuest,  (req, res) => {
    res.render('auth/register')
});


// Make the actions
router.post('/register', isGuest, async (req, res) => {

    const { password, repeatePassword, ...userData } = req.body;

    if (password !== repeatePassword) {
        // Returnig err notfication for not matching passwords
        return res.render('auth/register', { error: 'Passowrds not matching' })
    }

    try {
        await authService.create({ password, ...userData });

        res.redirect('/')

    } catch (error) {
        return res.render('auth/register', { error: 'db error' })

    }

})

// ========> LOGOUT
router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME)
    res.redirect('/')
})
module.exports = router;
