var myApp =angular.module("ttd", []);

myApp.controller("ttdcntrl", function($scope){

 

  $scope.chores =[];

$scope.addChore= function(){
  $scope.chores.push({task:$scope.choreInput});
  $scope.choreInput="";

 }



});
