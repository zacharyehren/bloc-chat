(function() {
  function UserOnline($firebaseArray, Message){
    var userOnlineCheck = function(){
      if (navigator.onLine) {
        console.log('online');
      } else {
        console.log('offline');
      }
    }
    console.log(userOnlineCheck());
    
    return {
      online: userOnlineCheck()
    }
  };
  angular
    .module('blocChat')
    .factory('UserOnline', ['$firebaseArray', 'Message', UserOnline]);
})();

