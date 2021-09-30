var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require("../controllers/register");
const session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
    const sess = req.session;
    sess.username = 'rachit';
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