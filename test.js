var test = QUnit.test;

test("Check if function getlocation exists", function(t) {
    t.ok(window.getlocation, "it exists")
});


test("Check if function getlocation returns an object", function(t) {
  var done = t.async(1);
  getlocation(function(error, data) {
    t.equal(typ=eof data,"object",'is an object')
    done()
  });
});

test("Check if data return array", function(t) {
  var done = t.async(1);
  getlocation(function(error, data) {
    // console.log(data);
    var p=data.YourFuckingLocation.split(",");
    // console.log(p); 
    t.deepEqual(p,["Gaza"," 00"," Occupied Palestine"],'is correct')
    done()
  });
});
test("Check if data return current location", function(t) {
  var done = t.async(1);
  getlocation(function(error, data) {
    // console.log(data);
    var p=data.YourFuckingLocation.split(",");
    var places= p[2]
        places=places.trim();
    //console.log(p);
    
    t.deepEqual(places,"Occupied Palestine",'is correct')
    done()
  });
});

