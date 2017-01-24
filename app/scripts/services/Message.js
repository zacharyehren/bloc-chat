(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    //Assigns the messages variable to the messages database in firebase

    return {

      getRoomById: function(roomId){
        ref.orderByChild("roomId").equalTo(roomId);
      }
    };


  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
