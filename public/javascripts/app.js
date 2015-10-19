/**
 * Created by Beth Aclaro on 10/7/15.
 */

var shopperApp = angular.module("Shopper", ['ui.router', 'bookshopService']);

shopperApp.run(['$rootScope', function($rootScope) {
    $rootScope.appTitle = "Dot";
}]);

shopperApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('logoutState', {
            url:"/"
        })
        .state('loginState', {
            url: "/login",
            templateUrl: "./partialviews/login.html",
            controller: "LoginController"
        })
        .state('storeState', {
            url: "/store",
            templateUrl: "./partialviews/store.html",
            controller: "StoreController"
        })
        .state('cartState', {
            url: "/cart",
            templateUrl: "./partialviews/shoppingcart.html",
            controller: "CartController"
        })
        .state('checkoutState', {
            url: '/checkout',
            templateUrl: "./partialviews/checkout.html",
            controller: ""
        });
}]);



//LOGIN
shopperApp.controller('LoginController', ['$scope', '$location', 'Login'
    , function ($scope, $location, Login) {
    $scope.loginUser = function (username, password) {
        var servData = Login.getData();
        servData.$promise.then( function (data) {
            if(data.user == username && data.password==password)
                $location.path('/store');
            else
                alert("Sorry");
        });
    };
}]);



//STORE
shopperApp.controller("StoreController", ['$scope', 'GetBooks', function ($scope, GetBooks) {
    $scope.total = parseInt(0);
    var servData = GetBooks.getData();
    servData.$promise.then( function (data) {
        $scope.books = data;
    });

    $scope.addToCart = function (price) {
        $scope.total += parseInt(price);
    };
}]);


//CART
shopperApp.controller("CartController", ['$scope', function($scope) {

}]);