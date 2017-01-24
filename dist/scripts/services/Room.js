(function() {
  function Room($firebaseArray) {
    var roomsRef = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(roomsRef);
    //assigns the rooms variable to rooms database in Firebase


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