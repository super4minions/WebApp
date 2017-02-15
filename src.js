//The Location Funtion
function request(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
 console.log("THis is console log",json)
            cb(undefined, json)
        } else {
            console.log("waiting for response");
        }
    };
    xhr.open("GET", url, true);
      // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send();
}

function getlocation(callback) {
    request("https://wtfismyip.com/json", callback)
}


function country (callback){
      request("https://wtfismyip.com/json", callback)
}
// getlocation(function(error, data) {

// });

getlocation(function(error, data) {
	//console.log(data);
    var p=data.YourFuckingLocation.split(",");
    var places= p[2]
       places=places.trim();
    if (places=="Occupied Palestine"){

    	places="West Bank and Gaza"
    }
    
    //var fullC=data.

    sts(places,function(error,data){
    console.log(places);
    gchart(data,places);
  })

});


function sts(place, callback) {

// console.log(c)
    request("http://api.population.io:80/1.0/population/2016/" + place + "/", callback)
}


google.charts.load('current', {'packages':['corechart']});

function gchart(d,p){
  //console.log("pass data", d);
// Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);
  var dc1 = [['Age','0'],['Male',0],['Female',0]];
  var dc2 = [['Gender','Total'],['Male',0],['Female',0]];
  for (var i = 1; i < d.length; i++){
    dc1[0][i]= d[i].age.toString();
    dc1[1][i]= d[i].males;
    dc1[2][i]= d[i].females;
    dc2[1][1]= dc2[1][1] + d[i].males;
    dc2[2][1]= dc2[2][1] + d[i].females;
  };

  function comparem(a,b) {
    if (a.males < b.males)
      return 1;
    if (a.males > b.males)
      return -1;
    return 0;
  }

  function comparef(a,b) {
    if (a.females < b.females)
      return 1;
    if (a.females > b.females)
      return -1;
    return 0;
  }

  var dc3t = d.sort(comparem).slice(0, 10);
  var dc3t = d.sort(comparef).slice(0, 10);
  var dc3m = [['Age','0'],['Male',0]];
  var dc3f = [['Age','0'],['Female',0]];
  for (var i = 1; i < dc3t.length; i++){
    dc3m[0][i]= d[i].age.toString();
    dc3m[1][i]= d[i].males;
    dc3f[0][i]= d[i].age.toString();
    dc3f[1][i]= d[i].females;
  };

    //console.log('d3',dc3t);
    function drawChart() {

      // Create the data table.
      var data = new google.visualization.arrayToDataTable(dc1);
      var data2 = new google.visualization.arrayToDataTable(dc2);
      var data3 = new google.visualization.arrayToDataTable(dc3m);
      var data4 = new google.visualization.arrayToDataTable(dc3f);
      // Set chart options
      var options = {'title':'Age Distribution',
                     'width':400,
                     'height':300,
                     legend: {position: 'none'}
                    };
      var options2 = {'title':'Gender ratio',
                     'width':400,
                     'height':300,
                     pieHole: 0.4,
                    };
      var options3 = {'title':'Males Top 10 Ages',
                     'width':400,
                     'height':300,
                      textPosition: 'in',
                      hAxis: {slantedText: true}
                    };
      var options4 = {'title':'Females Top 10 Ages',
                     'width':400,
                     'height':300,
                      textPosition: 'in',
                      hAxis: {slantedText: true}
                    };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
      var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
      chart2.draw(data2, options2);
      var chart3 = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
      chart3.draw(data3, options3);
      var chart4 = new google.visualization.ColumnChart(document.getElementById('chart_div4'));
      chart4.draw(data4, options4);

  }
}
