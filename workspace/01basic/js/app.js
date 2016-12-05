var app = angular.module('loginApp', []);

app.factory('LoginData', function () {
    return {
        email: '',
        successMessage: 'Welcome user!!',
        errorMessage: 'Invalid Username/Password!!',
        authenticate: function () {
            console.log(this.email);
            console.log(this.pwd)
            if (this.email === this.pwd) {
                this.message = this.successMessage + this.email
                return true;
            } else {
                this.message = this.errorMessage
                return false;
            }
        }
    }
})

app.controller('LoginCtrl', function (LoginData, $scope) {
    $scope.data = LoginData;
})