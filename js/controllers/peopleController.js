(function(){

angular.module('myportfolio')
    .controller('peopleController', ['$scope', function($scope){
      $scope.images = [
        {image : "images/elephant1.jpg", thumbnail : "images/elephant1_th.jpg", description : "image 1"},
        {image : "images/elephant2.jpg", thumbnail : "images/elephant2_th.jpg", description : "image 2"},
        {image : "images/elephant3.jpg", thumbnail : "images/elephant3_th.jpg", description : "image 3"},
        {image : "images/elephant4.jpg", thumbnail : "images/elephant4_th.jpg", description : "image 4"},
        {image : "images/elephant6.jpg", thumbnail : "images/elephant6_th.jpg", description : "image 6"},
        {image : "images/elephant7.jpg", thumbnail : "images/elephant7_th.jpg", description : "image 7"},
        {image : "images/elephant10.jpg", thumbnail : "images/elephant10_th.jpg", description : "image 10"},
        {image : "images/elephant11.jpg", thumbnail : "images/elephant11_th.jpg", description : "image 11"},
        {image : "images/elephant13.jpg", thumbnail : "images/elephant13_th.jpg", description : "image 13"},
        {image : "images/elephant16.jpg", thumbnail : "images/elephant16_th.jpg", description : "image 16"},
        {image : "images/elephant5.jpg", thumbnail : "images/elephant5_th.jpg", description : "image 5"},
        {image : "images/elephant8.jpg", thumbnail : "images/elephant8_th.jpg", description : "image 8"},
        {image : "images/elephant12.jpg", thumbnail : "images/elephant12_th.jpg", description : "image 12"},
        {image : "images/elephant14.jpg", thumbnail : "images/elephant14_th.jpg", description : "image 14"},
        {image : "images/elephant15.jpg", thumbnail : "images/elephant15_th.jpg", description : "image 15"}
      ]
      $scope.currentImage = _.first($scope.images);

      $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
      }

    }])


})()
