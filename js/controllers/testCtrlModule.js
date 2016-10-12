angular.module("testCtrlModule",[])

.controller("TestCtrl", ["$scope", function($scope) {

	$scope.testObject={};
	$scope.testObject.title = "Mian Page";

	$scope.testObject.bindOutput = 2;
}]);
