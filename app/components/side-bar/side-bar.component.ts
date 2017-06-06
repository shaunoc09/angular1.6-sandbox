
import angular from 'angular';

import SideBarController from './side-bar.controller';
import SideBarDirective from './side-bar.directive';

export default angular.module('sideBar', [])
	.controller('sideBarController', SideBarController)
	.directive('sideBarDirective', () => new SideBarDirective);