QUnit.test("check if XMLHttpRequest is created ", function(t) {
  t.ok(window.myRequest,'it exists');
});

QUnit.test("check if testRequest.onreadystatechange is function ", function(t) {

  var testRequest = new XMLHttpRequest();
     testRequest.onreadystatechange = function() {
        if (testRequest.readyState === 4 && testRequest.status === 200) {
          var x=testRequest.responseText;
       //  console.log(x)

        }
      };
      t.equal(typeof testRequest.onreadystatechange,"function",'it exists');
});


QUnit.test("check if testRequest.onreadystatechange is function ", function(t) {

  var testRequest = new XMLHttpRequest();
     testRequest.onreadystatechange = function() {
        if (testRequest.readyState === 4 && testRequest.status === 200) {
          var x=testRequest.responseText;
       //  console.log(x)

        }
      };
      t.equal(typeof testRequest.onreadystatechange,"function",'it exists');
});

QUnit.test("check if testRequest.onreadystatechange is function ", function(t) {

  var testRequest = new XMLHttpRequest();
     testRequest.onreadystatechange 
      };
      t.equal(typeof testRequest.onreadystatechange,"function",'it exists');
});

