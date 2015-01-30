'use strict';

angular.module('myProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('andrew', {
        url: '/andrew',
        templateUrl: 'app/andrew/andrew.html',
        controller: 'AndrewCtrl'
      });
  });