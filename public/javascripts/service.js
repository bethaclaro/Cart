/**
 * Created by Beth Aclaro on 10/7/15.
 */

//bookshop service
var bookshopService = angular.module("bookshopService", ['ngResource']);

bookshopService.factory('GetBooks', ['$resource', function ($resource){
    return $resource('http://demo3311988.mockable.io/api/booklist', {}, {
        getData: {method:'GET', isArray:true}
    });
}]);

bookshopService.factory('Cart', ['$resource', function ($resource) {
    return $resource('http://demo3311988.mockable.io/api/cart', {}, {
        getCart: {method: 'GET', isArray:true},
        addNew: {method:"POST"}
    });
}]);

bookshopService.factory('Login', ['$resource', function ($resource) {
    return $resource('http://demo3311988.mockable.io/api/loginuser', {}, {
        getData: {method: 'GET', isArray:false}
    });
}]);