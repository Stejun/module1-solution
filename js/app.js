(function(){
    "use strict";
    
    angular.module('LunchCheck',[])
    
    .controller('LunchCheckController',['$scope',function($scope){
        $scope.inputValue = '';
        $scope.LuchCheckButton = function(){
            var arrayValues = $scope.inputValue.split(",");
            var arrayChecked = CheckEmpty(arrayValues);
            var arrayCheckedLength = arrayChecked.length;
            $scope.class = "green";
            if(arrayCheckedLength > 3){
                $scope.note = "Too much!";
            }else if(arrayCheckedLength > 0 && arrayCheckedLength <= 3){
                $scope.note = "Enjoy!";
            }else if(arrayCheckedLength === 0){
                $scope.note = "Please enter data first";
                $scope.class = "red";
            }
        }
        function CheckEmpty(array){
            var temp =[];
            array.forEach(function(val){
                if(val.trim()){
                    temp.push(val);
                }
            })
            return temp;
        }
    }])
})()
