(function() {
  function ModalCtrl(Room, $uibModal) {
    this.newRoom = Room.create;

    this.cancelModal = function() {
      $uibModal.close();
    };

    this.openModal = function() {
      $uibModal.open();
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
