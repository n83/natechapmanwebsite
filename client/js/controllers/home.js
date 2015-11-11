(function() {

	var app = angular.module('app');

	var homeController = function($scope, loginService) {
		//loginService.login();
		$scope.message = 'Works!';

		// var data = {
		//     labels: ["Client-Side", "Server-Side", "Database", "Design"],
		//     datasets: [
		//         {
		//             label: "My First dataset",
		//             fillColor: "rgba(251,39,64,0.2)",
		//             strokeColor: "rgba(251,39,64,1)",
		//             pointColor: "rgba(251,39,64,1)",
		//             pointStrokeColor: "rgba(251,39,64,0.2)",
		//             pointHighlightFill: "#fff",
		//             pointHighlightStroke: "rgba(220,220,220,1)",
		//             data: [65, 59, 90, 81]
		//         }
		//     ]
		// };
		
		// var ctx = document.getElementById("myChart").getContext("2d");
		// var myRadarChart = new Chart(ctx).Radar(data, {});

		// var data2 = [
		//     {
		//         value: 300,
		//         color:"#fb2740",
		//         highlight: "#FF5A5E",
		//         label: "Red"
		//     },
		//     {
		//         value: 50,
		//         color: "transparent",
		//         highlight: "transparent",
		//         label: ""
		//     }
		// ];

		// var ctx2 = document.getElementById("experienceChart").getContext("2d");
		// var myDoughnutChart = new Chart(ctx2).Doughnut(data2, { segmentShowStroke : false, percentageInnerCutout : 95 });
	};

	app.controller('home', ['loginService', homeController]);
}());