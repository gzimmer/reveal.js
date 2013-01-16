'use strict';

/* Controllers */

function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S.",
     "age": 0},
    {"name": "Motorola XOOMâ„¢ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet.",
     "age": 1},
    {"name": "MOTOROLA XOOMâ„¢",
     "snippet": "The Next, Next Generation tablet.",
     "age": 2}
  ];

  $scope.orderProp = 'age';
}