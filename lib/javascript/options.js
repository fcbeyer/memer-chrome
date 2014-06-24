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
var module = angular.module("MemerOptions", [])
module.controller("TrollCtrl", ["$scope", function($scope)
{
    $scope.searchTerm = "";
    $scope.trolls = [];
    $scope.newMemberName = null;
    $scope.createNewTroll = function()
    {
        $scope.trolls.push({
            id: getNextId(),
            name: $scope.newMemberName
        });
        $scope.newMemberName = null;
    };
    $scope.deleteTroll = function(crewMember)
    {
        removeItem($scope.trolls, crewMember);
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
        var ids = $scope.trolls.map(function(p){ return p.id });
        var maxId = Math.max.apply(Math, ids) || 0;
        return maxId + 1;
    }

}]);