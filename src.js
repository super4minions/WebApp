//The Location Funtion
function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
         // console.log(json)
            cb(undefined, json)

        } else {
            console.log("waiting for response");
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function getlocation(callback) {
    request("https://wtfismyip.com/json", callback)
}

getlocation(function(error, data) {
    // console.log(data)
    var places="Japan";
    sts(places,function(error,data){
    console.log(data)


  })
      return data
});

function sts(place, callback) {
// console.log(c)
    request("http://api.population.io:80/1.0/population/1980/" + place + "/", callback)
}

google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  // Create the data table.
  var data = new google.visualization.arrayToDataTable([
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['Male', 10, 24, 20, 32, 18, 5, ''],
        ['Female', 16, 22, 23, 30, 16, 9, '']
      ]);
console.log("data", data);
  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300,
                 isStacked: true,
                 legend: {position: 'none'}
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
