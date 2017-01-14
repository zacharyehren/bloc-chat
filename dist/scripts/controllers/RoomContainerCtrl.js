(function() {
  function RoomContainerCtrl(Room) {
    this.roomsList = Room.all;
  }
  
  angular
    .module('bloc-Chat')
    .controller('RoomContainerCtrl', ['Room', RoomContainerCtrl]);
})();