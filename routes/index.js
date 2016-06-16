'use strict';

const HOME_ROUTE = '/';
const HOME_VIEW  = 'index';

const express       = require('express');
const router        = express.Router();
const configuration = require('../data/configuration.js');

router.get(HOME_ROUTE, (req, res, next) => {
    res.render(HOME_VIEW, {
        title: 'ツイッター',
        socket_port: configuration.socket.port
    });
});

module.exports = router;
