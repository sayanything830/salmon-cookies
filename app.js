'use strict';
//Putting in forms today
var form = document.getElementById('store_info');
var table = document.getElementById('cookie_sales');
var cookieDataForm = [];

//use mt constructor function
function Store(name, minCust, maxCust, avgCookieSales) {
  this.name = name; //grabs from parameters
  this.minCust = minCust; //grabs from parameters
  this.maxCust = maxCust; // grabs from parameters
  this.avgCookieSales = avgCookieSales; //grabs from parameters
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; //hours store is open to sell cookies
  this.cookiesPerHour = []; //will be filled once method is called
  this.dailyTotal = 0; //will be filled once method is called
  this.randNum = [];
}
Store.prototype.randomCust = function () {
  for(var i = 0; i < this.hours.length; i++) { //runs loop for each hour store is open
    this.randNum.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)); //generates my random customers per hour
    // console.log(this.randNum);
  }
  this.generateCookieSales();
  return this.randNum;
};
Store.prototype.generateCookieSales = function () {
  // console.log('hi there', this);
  for(var j = 0; j < this.randNum.length; j ++) {
    this.cookiesPerHour.push(this.randNum[j] * this.avgCookieSales);
  }
   //multiplies random customers by average cookie sales given in parameter and moves each into my array
  // console.log(typeof this.cookiesPerHour);
  // return this.cookiesPerHour;
  this.createDailyTotal();
};
Store.prototype.createDailyTotal = function() {
  console.log(this);
  for(var k = 0; k < this.hours.length; k ++) {
    this.dailyTotal += (Math.ceil(this.randNum[k] * this.avgCookieSales)); //tallies the total number of cookies as it runs through the loop
    // console.log(this.dailyTotal);
  }
  console.log('daily total', this.dailyTotal);
  return this.dailyTotal;
};

function formData(event) {
  event.preventDefault();

  var name = event.target.store.value;
  var minCust = parseInt(event.target.min_customers.value);
  var maxCust = parseInt(event.target.max_customers.value);
  var avgCookieSales = parseInt(event.target.avg_cook_sales.value);
  var storeOne = new Store(name, minCust, maxCust, avgCookieSales);
  storeOne.randomCust();

  // storeOne.generateCookieSales();
  cookieDataForm.push(storeOne);
  createTable(storeOne);
  //call table function here
  form.reset();
}

function createTable(store) {
  var row = document.createElement('tr');
  var td = '<td>' + store.name + '</td>' + '';
  for (var l = 0; l < store.cookiesPerHour.length; l ++) {
    td = td + '<td>' + store.cookiesPerHour[l] + '</td>';
  }
  td = td + '<td>' + store.dailyTotal + '</td>';
  row.innerHTML = td;
  table.appendChild(row);
}

form.addEventListener('submit', formData);
