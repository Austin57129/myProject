'use strict';

var _ = require('lodash');
var products = require('../../components/products');

// Get list of products
exports.index = function(req, res) {

  res.json(products);
};

exports.get = function(req, res) {

  var product = req.params.id - 1;

  if (product < 0 || product > products.length - 1) {
    res.json({error: 'Does not exist'});
  }
  else {
    res.json(products[product]);
  }
};


exports.post = function(req, res) {
  var product = {};
  product.name = req.body.name;
  product.description = req.body.description;
  products.push(product);
  res.json(product);
};

exports.delete = function(req, res) {
  var product = req.params.id - 1;
  products.splice(product,1);
  res.json(product);
};
