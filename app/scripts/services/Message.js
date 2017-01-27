(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    //Assigns the messages variable to the messages database in firebase

    return {

      getRoomById: function(roomId){
        console.log(messages);
        return
        messages.orderByChild("roomId.$value").equalTo(roomId);
      }
    };


  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
