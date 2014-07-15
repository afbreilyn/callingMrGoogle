
// creates click events
window.onload = function() {
  document.getElementById("submitButton").addEventListener('click', doStuff);
}

// calls the APIs and insert
var doStuff = function() {
    var args = document.getElementById("params-input").value.split("\ ").join("+");
    callApi("https\:\/\/google.com\/#q=", args)
    // document.getElementById("results").innerHTML = country;
}

// gets rid of placeholder text using onblur
function onInputFocus(field) {
  if (field.value == field.defaultValue) {
    field.value = '';
  };
}

//actuall calling API function
function callApi(args){

    $.ajax({
        url: "EXAMPLEURL", // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function(data) {
            console.log(data)
        },
        error: function(err) { 

        }
    })
}


