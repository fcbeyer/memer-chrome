var module = angular.module("MemerOptions", [])
module.controller("TrollCtrl", ["$scope", function($scope) {
    $scope.searchTerm = "";
    $scope.trolls = [];
    $scope.newTrollName = null;
    $scope.newTrollImage = null;
    $scope.newTrollDescription = null;
    restore_options();
    $scope.createNewTroll = function() {
        $scope.trolls.push({
            id: getNextId(),
            name: $scope.newTrollName,
            description: $scope.newTrollDescription,
            image: $scope.newTrollImage
        });
        $scope.newTrollName = null;
        $scope.newTrollImage = null;
        $scope.newTrollDescription = null;
    };
    $scope.deleteTroll = function(troll) {
        removeItem($scope.trolls, troll);
    };
    $scope.saveTrolls = function() {
        //do something awesome!
        chrome.storage.sync.set({
          'trolls': $scope.trolls
        }, function() {
          // Update status to let user know options were saved.
          var status = document.getElementById('status');
          status.textContent = 'Options saved.';
          setTimeout(function() {
            status.textContent = '';
          }, 1000);
        });
    };
    function restore_options() {
      chrome.storage.sync.get({
        'trolls': []
      }, function(items) {
        $scope.trolls = items.trolls
        $scope.$apply();
      });
    };

    //removes an item from the array
    //returns true if item is removed, false otherwise
    function removeItem(array, item) {
        var index = array.indexOf(item);
        if (index != -1)
        {
            array.splice(index, 1);
            return true;
        }
        else
        {
            return false;
        }
    }
    function getNextId()
    {
        var ids = $scope.trolls.map(function(p){ return p.id });
        var maxId = Math.max.apply(Math, ids);
        if(isFinite(maxId)) {
          return maxId + 1;
        }
        else {
          return 1;
        }
    }
}]);