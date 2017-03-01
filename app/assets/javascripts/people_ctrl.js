(function() {
  "use strict"

  angular.module("app").controller("peopleCtrl", function($scope) {

    $scope.people = [{

      name:"Moise Rwibutso",
      bio: "Choir leader and developer",
      bioShow: false
    },

    {

      name: "Jean Luc Abayo",
      bio: "Sci-fi lover",
      bioShow: false

    }, 

    {

      name: "Joseph Mugwaneza",
      bio: "e-soko ltd co-founder",
      bioShow: false
    }];

    $scope.shuffleBio = function (index) {
      if ($scope.people[index].bioShow == false){
        $scope.people[index].bioShow = true
      } else {
        $scope.people[index].bioShow = false
      };
    };

    $scope.removePerson = function(index) {
      
      $scope.people.splice(index, 1);
    }



    $scope.addPerson = function(name, bio) {
      if (name && bio) {
      var person = {
        name: name,
        bio: bio,
        bioShow: false
      };
      $scope.people.push(person);


      $scope.newPersonName = null;
      $scope.newPersonBio = null;
        
      }

    $scope.countPeople = $scope.people.length;

    };

    $scope.countPeople = $scope.people.length;




    window.$scope = $scope;
  });

})();
