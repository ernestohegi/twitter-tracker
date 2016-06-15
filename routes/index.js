'use strict';

const HOME_ROUTE = '/';
const HOME_VIEW  = 'index';

let express = require('express');
let router  = express.Router();

router.get(HOME_ROUTE, (req, res, next) => res.render(HOME_VIEW, { title: 'ツイッター' }));

module.exports = router;
