'use strict';

angular.module('myProjectApp')
  .service('api', ['$resource', function ($resource) {
    return {
      products: $resource('/api/products/:id', {id: '@id'},
        {
          'index': {method: 'GET', isArray: true},
          'get': {method: 'GET'},
          'delete': {method: 'DELETE'},
          'create': {method: 'POST'},
          'update': {method: 'PATCH'}
        })
    };
  }]);
