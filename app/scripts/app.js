(function() {
  function config($stateProvider, $locationProvide) {
   
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });
    
    $stateProvider
    .state('main', {
      url: '/',
      controller: 'MainView as main',
      templateUrl: '/templates/main.html'
    });
    
  }
  angular
  .module('blocChat', ['ui.router', 'firebase'])
  .config(config);
})