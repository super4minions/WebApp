![alt](https://s8.postimg.org/wojealcnp/logo1.jpg)
# Data WebApp.
*A web application built by the Super4minions as a project for the 3rd week of the GSG full time coding bootcamp.*

## User stories.
  As a client looking for data webapp.
> I want a web app that takes ```my current location``` as its default 
>  country for data search.

As a client looking for data webapp.
> I want a web app that allows me to toggle through available
> data in other locations/countries.

As a client looking for data webapp.
> I want a web app that displays stats in a visual, comparable, easy to  
> grasp way/ charts preferably.

## Building process. 

  - Sketching.
  - Writing the code (TDD approach).
  - Fetching the index and style sheet files.
  - Uploading to *github* pages.
  
### Sketching the idea.

It's basically about integrating 3 APIs to make specific data (statistics) available in the form of charts based on the user's location.

![alt](https://s13.postimg.org/4f8yhpnef/Sk1.jpg)
![alt](https://s8.postimg.org/6pp6kiz05/Sk2.jpg)

### Writing the code.

  - Tests file (test.js)
  
  1. Check if function ```getlocation``` exists.
  2. check if ```getlocation``` returns data.
  3. Make sure that ```getlocation``` returns country as output.
  4. Check if funtion ```country``` returns countries and touches the DOM
  to make the countries option available.
  5. Check if funtion ```sts``` takes current location as input.
  6. Check if ```sts``` returns data.
  7. Check if function ```gcharts``` takes stats.
  8. Check if function ```drawcharts``` is working (fetches stats tables).
  9. Check if function ```drawcharts``` draws chart (updating the DOM).
  
  - Source file (src.js)
  
  1. We had to use XMLHttpRequest asynchronously.  which means, we receive a callback when the data has been received and that lets the browser continue to work as normal while the request is being handled.
  
```JS
function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            // console.log("THis is console log", json)
            cb(undefined, json)
        } else {
            // console.log("waiting for response");
        }
    };
    xhr.open("GET", url, true);
      xhr.send();
}
```

  2. Created the function ```getlocation``` and used the API "https://wtfismyip.com/json" to get users location by their IP.
  3. Created the funtion ```sts``` that gets the data we want to use from the API "http://api.population.io:80/1.0/countries".
  4. Created the funtion ```gchart``` that uses Google Visualization as its API,
  the function also includes two other functions ```comparef``` and ```drawchart```.
