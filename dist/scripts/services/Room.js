(function() {
  function Room($firebaseArray) {
    var roomsRef = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(roomsRef);


    return {
      all: rooms,
      create: function(newRoom) {
        rooms.$add(newRoom);
      }
      
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();