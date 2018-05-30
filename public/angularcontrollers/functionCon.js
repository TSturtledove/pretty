app.controller("functionCon", function($scope, $route) {
  let count = 1
  console.log("hi")
  $scope.jam = "cinzelsmall"
  $scope.jelly = "bitter"
  $scope.butter ="droids"
  $scope.number = count
  const popPage = function() {
    $scope.number = count
    $scope.$apply()
  }

  $scope.trythis = function() {
    console.log("yo")
    // if(count>=0 && count!=2){
    //   count = 2
    // }else{count = 4}
    // popPage()
  }

})
