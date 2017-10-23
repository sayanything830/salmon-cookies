'use strict';

//Create an object for a salmon cookie store
var storeOne = {
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

  cookiesSoldPerHour: function() {
    return (this.randomCustomer() * this.avgCookiesCustomer);
    console.log(this.randomCustomer() * this.avgCookiesCustomer);
  },
};

for(var i = 0; i < storeOne.hours.length; i++) {
  storeOne.cookiesEachHour.push(storeOne.cookiesSoldPerHour());
  console.log(storeOne.cookiesEachHour[i]);
};

var storeOneHourlyTotals = [];
for(var j = 0; j < storeOne.hours.length; j++) {
  storeOneHourlyTotals.push('<li>' + storeOne.hours[j] + ': ' + Math.floor(storeOne.cookiesEachHour[j]) + ' cookies sold</li>');
  console.log(storeOneHourlyTotals[j]);
};


storeOne();
