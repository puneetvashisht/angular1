'use strict';

// That's right! We can just require angular as if we were in node
var angular = require('angular'); 
// We can use our WelcomeCtrl.js as a module. 
var WelcomeCtrl = require('./controllers/WelcomeCtrl'); 

var app = angular.module('myApp', []);


app.controller('WelcomeCtrl',WelcomeCtrl );

