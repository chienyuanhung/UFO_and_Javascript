// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//construct the table
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


 // Getting a reference to the button on the page with the class
var dateButton = d3.select(".btn_datetime");
var cityButton = d3.select(".btn_city");
var stateButton = d3.select(".btn_state");
var countryButton = d3.select(".btn_country");
var shapeButton = d3.select(".btn_shape");

  
// datetime button
dateButton.on("click", function() {

     // Getting a reference to the date input element on the page with the id set to 'datetime'
     var dateInput = d3.select("#datetime");

     var dataInputValue = dateInput.property("value");

     var filterData = tableData.filter(myData => myData.datetime === dataInputValue);

     tbody.html(" ")

     //construct the table
     filterData.forEach((data) => {
         var row = tbody.append("tr");
          Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
         });
      });
  
  });
    

// city button
cityButton.on("click", function() {

     // Getting a reference to the date input element on the page with the id set to 'datetime'
     var cityInput = d3.select("#city");

     var dataInputValue = cityInput.property("value");

     var filterData = tableData.filter(myData => myData.city === dataInputValue);

     tbody.html(" ")

     //construct the table
     filterData.forEach((data) => {
         var row = tbody.append("tr");
          Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
         });
      });
  
  });
    
// state button
stateButton.on("click", function() {

  // Getting a reference to the date input element on the page with the id set to 'datetime'
  var stateInput = d3.select("#state");

  var dataInputValue = stateInput.property("value");

  var filterData = tableData.filter(myData => myData.state === dataInputValue);

  tbody.html(" ")

  //construct the table
  filterData.forEach((data) => {
      var row = tbody.append("tr");
       Object.entries(data).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
   });

});

// country button
countryButton.on("click", function() {

  // Getting a reference to the date input element on the page with the id set to 'datetime'
  var countryInput = d3.select("#country");

  var dataInputValue = countryInput.property("value");

  var filterData = tableData.filter(myData => myData.country === dataInputValue);

  tbody.html(" ")

  //construct the table
  filterData.forEach((data) => {
      var row = tbody.append("tr");
       Object.entries(data).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
   });

});

// shape button
shapeButton.on("click", function() {

  // Getting a reference to the date input element on the page with the id set to 'datetime'
  var shapeInput = d3.select("#shape");

  var dataInputValue = shapeInput.property("value");

  var filterData = tableData.filter(myData => myData.shape === dataInputValue);

  tbody.html(" ")

  //construct the table
  filterData.forEach((data) => {
      var row = tbody.append("tr");
       Object.entries(data).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
   });

});