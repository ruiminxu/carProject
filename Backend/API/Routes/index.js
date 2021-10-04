const express = require('express');
const router = express.Router();

const controller = require('../Controller');

router.get('/', controller.homepage);

router.post('/signUp', controller.signUp);

router.post('/login', controller.login);

router.post('/logout', controller.logout);

router.post('/odn', controller.odn);

module.exports = router;