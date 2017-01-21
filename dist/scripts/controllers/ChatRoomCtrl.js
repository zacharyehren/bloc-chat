(function() {
  function ChatRoomCtrl(Message){

    this.launchRoom = Message.getRoomById;
  }

  angular
    .module('blocChat')
    .controller('ChatRoomCtrl', ['Message', ChatRoomCtrl]);
})();
