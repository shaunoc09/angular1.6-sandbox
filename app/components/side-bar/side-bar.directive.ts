export default class SideBarDirective {
  constructor() {

    return {
        restrict: 'E',
        templateUrl: 'side-bar.template.html',
        scope: {},
        controller : SideBarController,
        controllerAs : 'ctrl',
        bindToController : true
    };
  }
}
