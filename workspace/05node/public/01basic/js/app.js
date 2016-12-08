var app = angular.module('loginApp', []);



app.controller('LoginCtrl', function (LoginData, $scope) {
    $scope.data = LoginData;
})