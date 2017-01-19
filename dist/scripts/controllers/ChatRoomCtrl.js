(function() {
  function ChatRoomCtrl(HomeCtrl){
    console.log(this.selectedRoom);
  }
  
  angular
    .module('blocChat')
    .controller('ChatRoomCtrl', ['HomeCtrl', ChatRoomCtrl]);
})();