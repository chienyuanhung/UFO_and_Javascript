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


 // Getting a reference to the button on the page with the id filter-btn
var button = d3.select("#filter-btn");
  

//button
button.on("click", function() {


     // Getting a reference to the date input value on the page with the id 
     var dateInput = d3.select("#datetime").property("value");
     var cityInput = d3.select("#city").property("value");
     var stateInput = d3.select("#state").property("value");
     var countryInput = d3.select("#country").property("value");
     var shapeInput = d3.select("#shape").property("value");

     // get the filter data
     var filterData = tableData

     // filter data by input conditions, if exist
     if (dateInput){
      filterData = filterData.filter(myData => myData.datetime === dateInput);
     };
     
     if (cityInput){
      filterData = filterData.filter(myData => myData.city === cityInput);
     };

     if (stateInput){
      filterData = filterData.filter(myData => myData.state === stateInput);
     };

     if (countryInput){
      filterData = filterData.filter(myData => myData.country === countryInput);
     };

     if (shapeInput){
      filterData = filterData.filter(myData => myData.shape === shapeInput);
     };


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
    

// // city button
// cityButton.on("click", function() {

//      // Getting a reference to the date input element on the page with the id set to 'datetime'
//      var cityInput = d3.select("#city");

//      var dataInputValue = cityInput.property("value");

//      var filterData = tableData.filter(myData => myData.city === dataInputValue);

//      tbody.html(" ")

//      //construct the table
//      filterData.forEach((data) => {
//          var row = tbody.append("tr");
//           Object.entries(data).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//          });
//       });
  
//   });
    
// // state button
// Button.on("click", function() {

//   // Getting a reference to the date input element on the page with the id set to 'datetime'
//   var stateInput = d3.select("#state");

//   var dateInputValue = stateInput.property("value");

//   var filterDate = tableData.filter(myData => myData.state === dateInputValue);

//   tbody.html(" ")

//   //construct the table
//   filterData.forEach((data) => {
//       var row = tbody.append("tr");
//        Object.entries(data).forEach(([key, value]) => {
//          var cell = row.append("td");
//          cell.text(value);
//       });
//    });

// });

// // country button
// countryButton.on("click", function() {

//   // Getting a reference to the date input element on the page with the id set to 'datetime'
//   var countryInput = d3.select("#country");

//   var dataInputValue = countryInput.property("value");

//   var filterData = tableData.filter(myData => myData.country === dataInputValue);

//   tbody.html(" ")

//   //construct the table
//   filterData.forEach((data) => {
//       var row = tbody.append("tr");
//        Object.entries(data).forEach(([key, value]) => {
//          var cell = row.append("td");
//          cell.text(value);
//       });
//    });

// });

// // shape button
// shapeButton.on("click", function() {

//   // Getting a reference to the date input element on the page with the id set to 'datetime'
//   var shapeInput = d3.select("#shape");

//   var dataInputValue = shapeInput.property("value");

//   var filterData = tableData.filter(myData => myData.shape === dataInputValue);

//   tbody.html(" ")

//   //construct the table
//   filterData.forEach((data) => {
//       var row = tbody.append("tr");
//        Object.entries(data).forEach(([key, value]) => {
//          var cell = row.append("td");
//          cell.text(value);
//       });
//    });

// });