(function() {
  function ModalInstanceCtrl($uibModalInstance) {
    this.newRoom = function() {
      $uibModalInstance.close(this.name);
    };
    
    this.cancelModal = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
  
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
  })();