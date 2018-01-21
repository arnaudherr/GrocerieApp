function loadGoogleChart(array) {
	console.log(array)
	google.charts.load('current', {
		packages: ['corechart', 'line']
	});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		var data = google.visualization.arrayToDataTable(array);
		var options = {
			title: 'Money spent',
			curveType: 'function',
			pointSize: 4,
			legend: {
				position: 'none'
			},
			lineWidth: 2,
			hAxis: {
				textPosition: 'none'
			},
			colors: ['#4fe2a1'],
			backgroundColor: '#FAFAFA',
			is3D: true
		};
		var chart = new google.visualization.LineChart(document.getElementById('chart_curving'));
		chart.draw(data, {
			showRowNumber: true,
			width: '100%',
			height: '100%'
		});
		chart.draw(data, options);
	}
}
