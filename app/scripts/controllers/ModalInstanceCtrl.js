(function() {
  function ModalInstanceCtrl($uibModalInstance) {
    this.newRoom = function() {
      alert("got to new room in Modal Instance");
      $uibModalInstance.close(this.name);
    };
    
    this.cancelModal = function() {
      alert("got to new room in Modal Instance");
      $uibModalInstance.dismiss('cancel');
    };
  }
  
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
  })();