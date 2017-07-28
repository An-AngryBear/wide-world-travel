'use strict';

const myApp = angular.module('app', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
    	templateUrl: "./partials/intro.html",
    	controller: "opening"
    })
    .when("/guide-list.html", {
    	templateUrl: "./partials/guide-list.html",
    	controller: "bookCtrl"
    })
    .otherwise('/');
});