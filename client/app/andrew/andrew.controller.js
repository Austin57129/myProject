'use strict';

angular.module('myProjectApp')
  .controller('AndrewCtrl', function ($scope, api) {
    $scope.message = 'Hello';
    $scope.product = {};
    $scope.page = {};


    $scope.Clear = function () {
      $scope.product = {};
    };


    $scope.Add = function () {

      api.products.create($scope.product, function (data) {
        $scope.Index();
        $scope.page.add = 0;
      });

    };

    $scope.Index = function () {
      api.products.index(function (data) {
        $scope.products = data;
      });
    };

    $scope.Delete = function (id) {
      api.products.delete({id: id}, function (data) {
        $scope.Index();
      });
    };


    $scope.Index();

  });
