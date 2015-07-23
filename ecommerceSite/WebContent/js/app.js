(function(){

'use strict'
angular.module('ecommerce', [ ])
.factory('productService',function($http){

	var productsAPI={};
	productsAPI.getProducts=function(){

		return $http({
			url:"./products.json",
	    	//url: "http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703", 
	    	method: "GET",
	    	params: {}
	 	});


	}


 return productsAPI

})
.controller('storeController', ['$scope','productService',function($scope,productService) {
    
    $scope.products=[];
    $scope.heroProduct={};
    
    $scope.showHero=function(product){
    	//console.log("product info"+angular.toJson(product));
    	$scope.heroProduct=product;
    	
    }
    
    $scope.addToCart=function(product){
    	
    	alert("Product price is "+"$"+product['ProductInfo']['p_product_price']);
    }

productService.getProducts().success(function(data, status, headers, config){
	console.log("inside sucess");
	$scope.products=data['ProductsList'];
	
	$scope.heroProduct=$scope.products[0];
	console.log("printing hero product"+angular.toJson($scope.heroProduct));
	//console.log("products"+ angular.toJson($scope.products));
}).error(function(data, status, headers, config){
console.log("Inside error");
})


    
  }])


})();