(function() {
  function RoomContainerCtrl(openRoomContainer){
    this.openRoom = openRoomContainer;
  }
  
  angular
    .module('blocChat')
    .controller('RoomContainerCtrl', ['openRoomContainer', RoomContainerCtrl]);
})();