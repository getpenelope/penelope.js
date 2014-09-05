'use strict';
/* global $ */

/**
 * @ngdoc function
 * @name penelopejsApp.controller:SuperduffyCtrl
 * @description
 * # SuperduffyCtrl
 * Controller of the penelopejsApp
 */
angular.module('penelopejsApp')
  .controller('SuperduffyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('#inputor')
      .atwho({
        at: '@',
        insert_tpl: "<span class='tag project'>${atwho-data-value}</span>",
        data:['penelope', 'unife', 'cebora', 'cefla']
    })
      .atwho({
        at: 'to:',
        insert_tpl: "<span><img src='${atwho-data-value}'></span>",
        tpl: "<li data-value='${gravatar}'>${name}</li>",
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
        insert_tpl: "<span class='tag cr'>${atwho-data-value}</span>",
        data:['development', 'new custom fields']
    })
      .atwho({
        at: 'is:',
        insert_tpl: "<span class='tag'>${atwho-data-value}</span>",
        data:['task', 'timeentry', 'doc']
      });
  });
