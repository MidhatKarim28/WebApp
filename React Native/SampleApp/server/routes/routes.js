const express = require('express');

const {signup,users} = require('../controllers/auth.js')

const router = express.Router();

router.post('/signup',signup);
router.post('/users',users);


// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

module.exports = router;