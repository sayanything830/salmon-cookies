'use strict';
//starting over with a constructor function
function Store(name, minCust, maxCust, avgCookieSales) {
  this.name = name; //grabs from parameters
  this.minCust = minCust; //grabs from parameters
  this.maxCust = maxCust; // grabs from parameters
  this.avgCookieSales = avgCookieSales; //grabs from parameters
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; //hours store is open to sell cookies
  this.cookiesPerHour = []; //will be filled once method is called
  this.dailyTotal = 0; //will be filled once method is called
}
Store.prototype.randomCust = function () { //here is my method
  var salesTally = 0;
  var salesPerHour = [];
  for(var i = 0; i < this.hours.length; i++) { //runs loop for each hour store is open
    var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); //generates my random customers per hour
    salesPerHour.push(Math.ceil(randNum * this.avgCookieSales)); //multiplies random customers by average cookie sales given in parameter and moves each into my array
    console.log(salesPerHour);
    salesTally += (Math.ceil(randNum * this.avgCookieSales)); //tallies the total number of cookies as it runs through the loop
    console.log(salesTally);
  }
  this.cookiesPerHour = salesPerHour; //reassigns the above variable
  this.dailyTotal = salesTally; //reassigns the above variable
};

//now I'm establishing the parameters per store
var firstAndPike = new Store ('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//calling my methods
firstAndPike.randomCust();
seaTac.randomCust();
seattleCenter.randomCust();
capitolHill.randomCust();
alki.randomCust();

//Now adding table to the domain
var data = ['<td>Store Locations</td>'];
var storeLocations = [];

storeLocations.push(firstAndPike);
storeLocations.push(seaTac);
storeLocations.push(seattleCenter);
storeLocations.push(capitolHill);
storeLocations.push(alki);
console.log(storeLocations);

for(var j = 0; j < storeLocations[0].hours.length; j ++) { //this pulls my hours from my object and turns into a <td> string to create my table header
  data = data + '<td>' + storeLocations[0].hours[j] + '</td>';
  console.log(data);
}
data = data + '<td>Daily Totals</td>';

var header = document.createElement('tr');
header.innerHTML = data;
document.getElementById('table_head').appendChild(header);


var dataContent = [];
for(var k = 0; k < storeLocations[0].hours.length; k ++) {
  dataContent.push(
    '<td>' + storeLocations[k].cookiesPerHour + '</td>'
  );
  console.log(dataContent);
};

var tableBody = document.createElement('tr');
tableBody.innerHTML = dataContent;
document.getElementById('table_content').appendChild(tableBody);

// var newRow = document.createElement('tr');
// newRow.innerHTML = dataContent.join('');
// document.getElementById('table_content').appendChild(header);

// var dataContent = [];
// for(var k = 0; k < storeLocations[k].length; k ++) {
//   dataContent = dataContent + '<td>' + storeLocations[k].cookiesPerHour[k];
//   console.log(dataContent);
// }
