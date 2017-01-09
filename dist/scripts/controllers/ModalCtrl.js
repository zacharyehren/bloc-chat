(function() {
  function ModalCtrl(Room, $uibModal) {
    this.newRoom = function() {
      var newRoomName = document.getElementsByName("newRoomName");
      Room.create(newRoomName);
    };

    this.cancelModal = function() {
      $uibModal.close();
    };

    this.openModal = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html'
      });
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();

