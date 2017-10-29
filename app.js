'use strict';
//Putting in forms today
var form = document.getElementById('store_info');//accessing my form
var table = document.getElementById('cookie_sales');//accessing table
var cookieDataForm = [];

//useing my constructor function
function Store(name, minCust, maxCust, avgCookieSales) {
  this.name = name; //grabs from user
  this.minCust = minCust; //grabs from user
  this.maxCust = maxCust; // grabs from user
  this.avgCookieSales = avgCookieSales; //grabs from user
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; //hours store is open to sell cookies
  this.cookiesPerHour = []; //cookies totals per hour each store
  this.dailyTotal = 0; //total cookies sold each day per store
  this.randNum = []; //randum customer generater
}

Store.prototype.randomCust = function () {//this function generates a random number to represent customers in the store each hour
  for(var i = 0; i < this.hours.length; i++) { //runs loop for each hour store is open
    this.randNum.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
  this.generateCookieSales(); //calls next function
  return this.randNum;
};
Store.prototype.generateCookieSales = function () { //this multiplies average cookie sales by the random customer number wach hour
  for(var j = 0; j < this.randNum.length; j ++) {
    this.cookiesPerHour.push(this.randNum[j] * this.avgCookieSales);
  }
  this.createDailyTotal(); //calls next function
};
Store.prototype.createDailyTotal = function() { //this function adds total number of cookies sold in a day
  // console.log(this);
  for(var k = 0; k < this.hours.length; k ++) {
    this.dailyTotal += (Math.ceil(this.randNum[k] * this.avgCookieSales));
  }
  // console.log('daily total', this.dailyTotal);
  return this.dailyTotal;
};

function formData(event) { //creating event function
  event.preventDefault(); //stops page from reloading

  var name = event.target.store.value;//takes input from user
  var minCust = parseInt(event.target.min_customers.value);
  var maxCust = parseInt(event.target.max_customers.value);
  var avgCookieSales = parseInt(event.target.avg_cook_sales.value);
  var storeOne = new Store(name, minCust, maxCust, avgCookieSales); //instantiates Store contructor function
  storeOne.randomCust();//calls function once data is entered
  // storeOne.generateCookieSales();
  cookieDataForm.push(storeOne); //moves table data created from createTable function to variable established above
  createTable(storeOne);//calls createTable function
  addFooter(storeOne);// addFooter(storeOne); //calls addFooter function, but not currently working
  form.reset(); //once submit button has been pressed
};

function createTable(store) { //helper function to create <td> tags around each cookiesPerHour item in an array
  var row = document.createElement('tr');
  var td = '<td>' + store.name + '</td>' + '';
  for (var l = 0; l < store.cookiesPerHour.length; l ++) {
    td = td + '<td>' + store.cookiesPerHour[l] + '</td>';
  };
  td = td + '<td>' + store.dailyTotal + '</td>';
  row.innerHTML = td;
  table.appendChild(row);
};
form.addEventListener('submit', formData); //calls event function

//***footer is adding row under each entry, not one only at bottom of table***
var hourTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function addFooter(storeOne) {
  var tf = ['<td>Hourly Totals</td>'];
  for (var m = 0; m < storeOne.cookiesPerHour.length; m++) {
    hourTotal[m] += storeOne.cookiesPerHour[m];
    tf = tf + '<td>' + hourTotal[m] + '</td>';
    for (var n = 0; storeOne.length; n++) {
      hourTotal[n] += storeOne[m].cookiesPerHour[m];
    }
  };
  var footRow = document.createElement('tr');
  footRow.innerHTML = tf;
  table.appendChild(footRow);
  console.log('hourly total', hourTotal);
};
