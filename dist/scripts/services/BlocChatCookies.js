(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var usernameModalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: 'templates/usernameModal.html',
        controller: 'UsernameModalInstanceCtrl',
        controllerAs: 'usernameModal'
      });

        usernameModalInstance.result.then(
        function(username) {
          $cookies.put('blocChatCurrentUser', username);
          return username;
      })

    }
    return {
      username: currentUser
      }
    };

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
