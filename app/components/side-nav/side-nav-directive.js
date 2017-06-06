'use strict';

angular.module('myApp.sideNav.sideNav-directive', [])

.directive('sideNav',[ function() {
  return {
    restrict: 'E',
    templateUrl: 'components/side-nav/side-nav.template.html',
    scope: {},
  };
}]);
