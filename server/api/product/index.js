'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.get);
router.post('/', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;
