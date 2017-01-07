(function() {
  function Room($firebaseArray) {
    var roomsRef = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(roomsRef);
   
    //My thoughts here were to first create a newRoom variable and set it to null since nothing has been created yet. Then within the function use the $add method to add the new room to the rooms array. I'm currently stuck on how to connect newRoom variable to the newRoom method in ModalCtrl.js
    var newRoom = null;
    var createNewRoom = function(){
      rooms.$add(newRoom);
    }
    

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();