'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./shows'));

router.get('/', function(req, res) {
    res.json({

    });
});