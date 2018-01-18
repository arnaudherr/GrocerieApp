





google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Date', 'Depenses'],
         ['17/01/2018',  110],
         ['18/01/2018',  8.8],
         ['24/01/2018',  78.89],
         ['29/01/2018',  124.90]
       ]);

       var options = {
         title: 'Dépences par mois',
         curveType: 'function',
         legend: { position: 'none' },
         lineWidth: 2,

         hAxis: { textPosition: 'none' },


         colors: ['#4fe2a1'],
         backgroundColor: '#FAFAFA',

         is3D: true



       };

       var chart = new google.visualization.LineChart(document.getElementById('chart_curving'));

       chart.draw(data, options);
     }
