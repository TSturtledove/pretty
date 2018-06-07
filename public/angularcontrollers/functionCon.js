app.controller("functionCon", function($scope, $route, $http) {
  let count = 1
  $scope.jam = "cinzelsmall"
  $scope.jelly = "bitter"
  $scope.butter ="droids"
  $scope.number = count
  // const popPage = function() {
  //   $scope.number = count
  //   console.log("tellme")
  //   $scope.$apply()
  // }

  $scope.trythis = () =>{
    console.log("yo")
    // if(count>=0 && count!=2){
    //   count = 2
    // }else{count = 4}
    popPage()
  }



// Can't tell what is wrong here and why the function won't fire,
// it seems that the pages connect alright but the ng-click is not
// working right.
  $scope.Profile = () => {
    console.log("you hit the profile button")
  //   authFactory.gatecheck()
  //   .then( () => {
  //     $scope.$apply(function() { $route.path("/profile") })
  //     console.log("got back from gatecheck")
  //   }).catch( (err)=> {
  //     console.log("got an error at gatecheck", err)
  //   })
  }
})
