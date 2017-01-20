(function() {
  function ChatRoomCtrl(Message){
    
    this.launchRoom = Message.getByRoomId;
  }
  
  

  angular
    .module('blocChat')
    .controller('ChatRoomCtrl', 'Message',[ChatRoomCtrl]);
})(); 
