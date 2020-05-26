const router = require('express').Router()

router.post('/register', (req, res) => {
    res.send('Register')
})

router.post('/login', (req, res) => {
    res.send(JSON.stringify({ token: 'hello' }))
})

router.get('/user', (req, res) => {
    res.send(JSON.stringify({ user: { email: 'test@example.com' } }))
})

router.get('/logout', (req, res) => {
    res.send('Logout')
})

module.exports = router
