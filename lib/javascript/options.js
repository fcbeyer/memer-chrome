// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor: likesColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

//angular stuff
var module = angular.module("DemoApp", [])
module.controller("DemoCtrl", ["$scope", function($scope)
{
    $scope.searchTerm = "";
    $scope.crew = [
        { id: 104, name: "Malcolm Reynolds" },
        { id: 108, name: "Zoë Washburne" },
        { id: 115, name: "Hoban Washburne" },
        { id: 116, name: "Simon Tam" },
        { id: 123, name: "River Tam" },
        { id: 142, name: "Jayne Cobb" }
    ];
    $scope.newMemberName = null;
    $scope.createNewUser = function()
    {
        $scope.crew.push({
            id: getNextId(),
            name: $scope.newMemberName
        });
        $scope.newMemberName = null;
    };
    $scope.deleteCrew = function(crewMember)
    {
        removeItem($scope.crew, crewMember);
    };

    //removes an item from the array
    //returns true if item is removed, false otherwise
    function removeItem(array, item)
    {
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

    //gets the next-available ID
    function getNextId()
    {
        var ids = $scope.crew.map(function(p){ return p.id });
        var maxId = Math.max.apply(Math, ids) || 0;
        return maxId + 1;
    }

}]);