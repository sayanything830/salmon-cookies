'use strict';

//Create an object for a salmon cookie store
var storeOne = { //starting with store one
  minCustomer: 23, //min customers, value given in problem domain
  maxCustomer: 65, //max customers given in problem domain
  avgCookiesCustomer: 6.3, //average cookies per sale given in problem domain
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], //array for each hour store is open
  cookiesEachHour: [], //array for cookies sold based on random customers generated each hour

  randomCustomer: function () { //this generates a random number to represent the amount of customers in an hour
    var min = Math.ceil(this.minCustomer);
    var max = Math.floor(this.maxCustomer);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  cookiesSoldPerHour: function() { //this multiplies the random number by the average cookies to create cookies sold per hour
    return (this.randomCustomer() * this.avgCookiesCustomer);
    console.log(this.randomCustomer() * this.avgCookiesCustomer);
  },
};

for(var i = 0; i < storeOne.hours.length; i++) {//this takes the total cookies per hour and pushes into an array
  storeOne.cookiesEachHour.push(storeOne.cookiesSoldPerHour());
  console.log(storeOne.cookiesEachHour[i]);
};

var storeOneHourlyTotals = [];
for(var j = 0; j < storeOne.hours.length; j++) { //this turns hour and cookies per hour data and pushes into an array as a string
  storeOneHourlyTotals.push('<li>' + storeOne.hours[j] + ': ' + Math.floor(storeOne.cookiesEachHour[j]) + ' cookies sold</li>');
  console.log(storeOneHourlyTotals[j]);
};

var dailyTotal = [];
var total = 0; //this will calculate total cookies sold by end of day
for(var k = 0; k < storeOne.hours.length; k++) {
  total += Math.floor(storeOne.cookiesEachHour[k]);
  dailyTotal.push(total);
  console.log(dailyTotal[14]); //this is the total number of cookies sold
};
