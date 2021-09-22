var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require("../controllers/register")
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


/**
 * @require {email, confirmPassword}  -  req.body
 * @description
 * Security, performance and edge cases
 * 
 * level ==>> 2
 * JS / SQL Ijnection to nhi hoga??? --THA
 * 
 * level ==>> 3
 * check if email  already exixts
 * password hashing (to leak the pass breach even if leaked)
 * email lowercase
 * save
 */


router.post('/register', registerInitialCheck, register)
module.exports = router;