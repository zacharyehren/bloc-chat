(function() {
  function openRoomContainer() {
    return {
      templateUrl: '/templates/directives/roomContainer.html',
      replace: true,
      restrict: 'E',
      scope: { }
    };
  }
  
  angular
    .module('blocChat')
    .directive('openRoomContainer', [openRoomContainer]);
})();