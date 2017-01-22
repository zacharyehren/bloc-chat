(function() {
  function ChatRoomCtrl(Message, $scope){
    console.log($scope.selectedRoom);
  }

  angular
    .module('blocChat')
    .controller('ChatRoomCtrl', ['$scope', 'Message', ChatRoomCtrl]);
})();
