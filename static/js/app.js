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


 // Getting a reference to the date button on the page with the id set to `filter-btn`
var dateButton = d3.select("#filter-btn");
  

// Getting a reference to the date input element on the page with the id set to 'datetime'
// var dateInput = d3.select("#datetime");


dateButton.on("click", function() {

     // Getting a reference to the date input element on the page with the id set to 'datetime'
     var dateInput = d3.select("#datetime");

     var dataInputValue = dateInput.property("value");
     console.log(dataInputValue)

     var filterDate = tableData.filter(myData => myData.datetime === dataInputValue);

     tbody.html(" ")

     //construct the table
     filterDate.forEach((data) => {
         var row = tbody.append("tr");
          Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
         });
      });
    

  });
    