angular.module('website', ['ngRoute', 'easypiechart', 'ngMap'])
  .config(function($routeProvider) {
    $routeProvider
    // defined four routes
      .when('/home', {templateUrl:'partials/home.html'})
      .when('/about', {templateUrl:'partials/about.html'})
      .when('/projects', {templateUrl:'partials/projects.html'})
      .when('/contact', {templateUrl:'partials/contact.html'})
      .otherwise({redirectTo: '/home', template:'partials/home.html'});
  });

function MainCtrl($scope) {
  $scope.javascript="93%";
  $scope.jquery="73%";
  $scope.css="95%";
  $scope.angularjs ="87%";
  $scope.options = {
    animate:{
        duration:1000,
        enabled:true
    },
    barColor:'#0085d1',
    scaleColor:true,
    lineWidth:4,
    lineCap:'round',
    size: '120'
  };

  //form data
  var data={};
  // contactform
  $scope.sendMessage = function() {
    $scope.contactName;
    $scope.contactEmail;
    $scope.contactMessage;

    data["name"]=$scope.contactName;
    data["email"];
    data["message"];
    console.log($scope.contactName);
  }

  //display my email
  $scope.displayEmail = function() {
    var str ="You can email me at saintmz3@gmail.com"
    $scope.displayEmail=str;
  }
}
