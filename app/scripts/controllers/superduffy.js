'use strict';
/* global $ */
/*jshint camelcase: false */


/**
 * @ngdoc function
 * @name penelopejsApp.controller:SuperduffyCtrl
 * @description
 * # SuperduffyCtrl
 * Controller of the penelopejsApp
 */
angular.module('penelopejsApp')
  .controller('SuperduffyCtrl', function ($scope) {

    $scope.task = '';
    $scope.task_json = {};

    $scope.$watch('task', function(v){
        var parsed = $($.parseHTML(v));
        $scope.task_json.projects = [];
        $scope.task_json.crs = [];

        angular.forEach(parsed.find('.project'), function(value, key) {
               this.push($(value).text());
        }, $scope.task_json.projects);
        angular.forEach(parsed.find('.cr'), function(value, key) {
               this.push($(value).text());
        }, $scope.task_json.crs);
    });

    $('#inputor')
      .atwho({
        at: '@',
        tpl: '<li data-value="${name}">${name}</li>',
        insert_tpl: '<span class=\'tag project\'>${atwho-data-value}</span>',
        data:['penelope', 'unife', 'cebora', 'cefla']
    })
      .atwho({
        at: 'to:',
        tpl: '<li data-value="${name}">${name}</li>',
        insert_tpl: '<span class=\'user\' data-username=\'${name}\'><img src=\'${gravatar}\'></span>',
        data:[
        {
          gravatar: 'https://www.gravatar.com/avatar/2d8d80189ecaf3d4a27b4ee1f699e4e3?s=30',
          name: 'amleczko'
        },
        {
          gravatar: 'https://www.gravatar.com/avatar/a718552e1a1cb21fd65d8661d854fe0f?s=30',
          name: 'massimo'
        },
        ]
    })
      .atwho({
        at: 'cr:',
        tpl: '<li data-value="${name}">${name}</li>',
        insert_tpl: '<span class=\'tag cr\'>${atwho-data-value}</span>',
        data:['development', 'new custom fields']
    })
      .atwho({
        at: 'is:',
        tpl: '<li data-value="${name}">${name}</li>',
        insert_tpl: '<span class=\'tag\'>${atwho-data-value}</span>',
        data:['task', 'timeentry', 'doc']
    })
  });
