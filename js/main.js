$(function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
    $("#add__item").autocomplete({
        source: availableTags,
        minLength: 1,
        select: function(event, ui) {
            var url = ui.item.id;
            if(url != '#') {
                location.href = '/blog/' + url;
            }
        },

        html: true, // optional (jquery.ui.autocomplete.html.js required)

      // optional (if other layers overlap autocomplete list)
        open: function(event, ui) {
            $(".ui-autocomplete").css("z-index", 1000);
        }
    });

});

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
