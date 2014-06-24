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