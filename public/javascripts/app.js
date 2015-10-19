/**
 * Created by Beth Aclaro on 10/7/15.
 */

var cartApp = angular.module("Cart", ['ui.router', 'bookshopService']);

cartApp.run(['$rootScope', function($rootScope) {
    $rootScope.appTitle = "Dot";
}]);

cartApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('logoutState', {
            url:"/"
        })
        .state('loginState', {
            url: "/login",
            templateUrl: "partials/login.jade",
            controller: "LoginController"
        })
        .state('storeState', {
            url: "/store",
            templateUrl: "views/partials/store.jade",
            controller: "StoreController"
        })
        .state('cartState', {
            url: "/cart",
            templateUrl: "partials/shoppingcart.jade",
            controller: "CartController"
        })
        .state('checkoutState', {
            url: '/checkout',
            templateUrl: "views/partials/checkout.jade",
            controller: ""
        });
}]);



//LOGIN
cartApp.controller('LoginController', ['$scope', '$location', 'Login'
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
cartApp.controller("StoreController", ['$scope', 'GetBooks', function ($scope, GetBooks) {
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
cartApp.controller("CartController", ['$scope', function($scope) {

}]);