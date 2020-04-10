var express = require('express');
var router = express.Router();

/* POST LOGIN */
router.post('/', function(req, res, next) {

    console.log('OK: POST REQUEST TO /login HAS BEEN PERFORMED');

    /**
     * Get values from request body json dataType: json
     */
    const email = req.body.email;
    const password = req.body.password;

    console.log('Values got:');
    console.log('email: ', email);
    console.log('password: ', password);

    let out = {
        'error': 'WRONG_PASSWORD',
        'error_code': '001'
    };

    /**
     * Hardcoded
     *
     * if user is 'admin@example.com' and password is 'contraseña' then returns a token
     */
    if(email === 'admin@example.com' && password === 'contraseña') {
        out = {
            'token': 'd09dd554f4a6b21d61f707ecfb7d223dd298d0b1'
        };
        console.log('login successfully, generated token', out);
    } else {
        console.log('Wrong values.')
    }

    console.log('end');
    res.json(out);
});

module.exports = router;
