//定义了一个angular程序模块
var app=angular.module('phonecatApp',[]);


//angular程序模块中定义了一个控制器
app.controller('PhoneListController',function($scope){
	$scope.phones=[
		{name:'Nexus S', snippet:'Fast just got faster with Nexu S'},
		{name:'Motorola XOOM', snippet:'Fast just got faster with Nexu S'},
		{name:'Motorola S', snippet:'Fast just got faster with Nexu S'}
	];

	$scope.name="world";
});