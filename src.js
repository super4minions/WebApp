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
<<<<<<< HEAD
//     var p = data.YourFuckingLocation.split(",");
//     var places = p[2]
//     places = places.trim();
//     if (places == "Occupied Palestine") {
//         places = "West Bank and Gaza"
//     }

//     sts(places, function(error, data) {
//         console.log(data)

    
//     })
=======
// 	console.log(data);
//     var p=data.YourFuckingLocation.split(",");
//     var places= p[2]
//        places=places.trim();
//     if (places=="Occupied Palestine"){

//     	places="West Bank and Gaza"
//     }
  
//     //var fullC=data.
 
//     sts(places,function(error,data){
//     console.log(data[0])
    
//   })
//       return data
>>>>>>> 9709f9e4499f1a2050c791db6fd364f004da5892
// });

function sts(place, callback) {
    // console.log(c)
    request("http://api.population.io/1.0/population/2016/France/", callback)
}

<<<<<<< HEAD
function contries(callback) {
    // console.log(c)
    request("http://api.population.io:80/1.0/countries", callback)
}

// contries(function(error, data) {
//     console.log(data)
// });

function chart(data,callback){
	   // request("http://api.population.io:80/1.0/population/1980/" + place + "/", callback)

}
=======
>>>>>>> 9709f9e4499f1a2050c791db6fd364f004da5892
