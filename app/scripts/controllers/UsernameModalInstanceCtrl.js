(function() {
  function UsernameModalInstanceCtrl($uibModalInstance) {
    this.setUsername = function() {
    if (this.username === undefined) {
      alert("You didn't enter a username!");
    } else {
      $uibModalInstance.close(this.username);
    }
    };

    }

  angular
    .module('blocChat')
    .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', UsernameModalInstanceCtrl]);
})();
