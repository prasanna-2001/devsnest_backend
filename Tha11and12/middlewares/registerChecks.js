const { emailValidate, passwordValidate } = require("../utils/validate");
const passwordValidate = require("../utils/passwordValidate");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next
 * @description
 *  level ==>> 1
 * email validation -@&.
 * password validation
 * password == confirm password
 */
const registerInitialCheck = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    if (typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        confirmPassword === password &&
        emailValidate(email) &&
        passwordValidate(password)) {
        next();
    } else res.status(401).send("Initial Check Failed !");
};

module.exports = registerInitialCheck;

