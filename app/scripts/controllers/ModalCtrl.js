(function() {
  function ModalCtrl(Room, $uibModal) {

    this.openModal = function() {
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal'
      });
      
      modalInstance.result.then(
        function(name) {
          alert("Got to promise");
          Room.create(name);
        }
      )
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();

