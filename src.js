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

// getlocation(function(error, data) {

//     var p = data.YourFuckingLocation.split(",");
//     var places = p[2]
//     places = places.trim();
//     if (places == "Occupied Palestine") {
//         places = "West Bank and Gaza"
//     }

//     sts(places, function(error, data) {
//        // console.log(data)

    
//     })
//       return data
// });

function sts(place, callback) {

    request("http://api.population.io/1.0/population/2016/France/", callback)
}

function contries(callback) {
    // console.log(c)
    request("http://api.population.io:80/1.0/countries", callback)
}

// contries(function(error, data) {
//     console.log(data)
// });