const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    resp.send('home');
});

// router.get('/login', (req, res) => {
//     res.render('login');
// });

// router.get('/register', (req, res) => {
//     res.render('register');
// });

module.exports = router;
