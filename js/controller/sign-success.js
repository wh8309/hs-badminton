;(function(){
  app.controller('signSuccess',function($scope,$http,API,$routeParams){

    $scope.msg=$routeParams.msg;

    /**
     * 返回主页
     */
    $scope.back=function(){
      window.location.href='#/sign'
    }
  });
})();