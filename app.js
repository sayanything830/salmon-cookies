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
  dailyTotal.push('<li>Total Cookies sold: ' + total + '</li>');
  console.log(dailyTotal[dailyTotal.length - 1]); //this is the total number of cookies sold
};

function storeOneDom (){ //Adding list to sales.html
  var containerOne = document.createElement('div');
  containerOne.innerHTML = '<h2>1st and Pike</h2>';
  document.body.appendChild(containerOne);

  var listOne = document.createElement('ul');
  var listOneArr = [];

  for(var a = 0; a < storeOneHourlyTotals.length; a++) {
    listOneArr.push(storeOneHourlyTotals[a]);
  }
  listOneArr.push(dailyTotal[dailyTotal.length - 1]);
  listOne.innerHTML = listOneArr.join('');
  document.body.appendChild(listOne);

  // var storeOneTotal = document.createElement('li');
  // storeOneTotal.innerHTML = 'Total cookies sold: ' + dailyTotal[14];
  // document.body.appendChild(storeOneTotal);
};
storeOneDom();

//store two
var storeTwo = { //starting with store one
  minCustomer: 3, //min customers, value given in problem domain
  maxCustomer: 24, //max customers given in problem domain
  avgCookiesCustomer: 1.2, //average cookies per sale given in problem domain
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

for(var l = 0; l < storeTwo.hours.length; l++) {//this takes the total cookies per hour and pushes into an array
  storeTwo.cookiesEachHour.push(storeTwo.cookiesSoldPerHour());
  console.log(storeTwo.cookiesEachHour[l]);
};

var storeTwoHourlyTotals = [];
for(var m = 0; m < storeTwo.hours.length; m++) { //this turns hour and cookies per hour data and pushes into an array as a string
  storeTwoHourlyTotals.push('<li>' + storeTwo.hours[m] + ': ' + Math.floor(storeTwo.cookiesEachHour[m]) + ' cookies sold</li>');
  console.log(storeTwoHourlyTotals[m]);
};

var dailyTotalTwo = [];
var totalTwo = 0; //this will calculate total cookies sold by end of day
for(var n = 0; n < storeTwo.hours.length; n++) {
  totalTwo += Math.floor(storeTwo.cookiesEachHour[n]);
  dailyTotalTwo.push('<li>Total Cookies sold: ' + totalTwo + '</li>');
  console.log(dailyTotalTwo[dailyTotalTwo.length - 1]); //this is the total number of cookies sold
};

function storeTwoDom (){ //Adding list to sales.html
  var containerTwo = document.createElement('div');
  containerTwo.innerHTML = '<h2>SeaTac Airport</h2>';
  document.body.appendChild(containerTwo);

  var listTwo = document.createElement('ul');
  var listTwoArr = [];

  for(var b = 0; b < storeTwoHourlyTotals.length; b++) {
    listTwoArr.push(storeTwoHourlyTotals[b]);
  }
  listTwoArr.push(dailyTotalTwo[dailyTotalTwo.length - 1]);
  listTwo.innerHTML = listTwoArr.join('');
  document.body.appendChild(listTwo);

  // var storeTwoTotal = document.createElement('li');
  // storeTwoTotal.innerHTML = 'Total cookies sold: ' + dailyTotalTwo[14];
  // document.body.appendChild(storeTwoTotal);
};
storeTwoDom();

//store 3
var storeThree = { //starting with store one
  minCustomer: 11, //min customers, value given in problem domain
  maxCustomer: 38, //max customers given in problem domain
  avgCookiesCustomer: 3.7, //average cookies per sale given in problem domain
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

for(var o = 0; o < storeThree.hours.length; o++) {//this takes the total cookies per hour and pushes into an array
  storeThree.cookiesEachHour.push(storeThree.cookiesSoldPerHour());
  console.log(storeThree.cookiesEachHour[o]);
};

var storeThreeHourlyTotals = [];
for(var p = 0; p < storeThree.hours.length; p++) { //this turns hour and cookies per hour data and pushes into an array as a string
  storeThreeHourlyTotals.push('<li>' + storeThree.hours[p] + ': ' + Math.floor(storeThree.cookiesEachHour[p]) + ' cookies sold</li>');
  console.log(storeThreeHourlyTotals[p]);
};

var dailyTotalThree = [];
var totalThree = 0; //this will calculate total cookies sold by end of day
for(var q = 0; q < storeThree.hours.length; q++) {
  totalThree += Math.floor(storeThree.cookiesEachHour[q]);
  dailyTotalThree.push('<li>Total Cookies sold: ' + totalThree + '</li>');
  console.log(dailyTotalThree[dailyTotalThree.length - 1]); //this is the total number of cookies sold
};

function storeThreeDom (){ //Adding list to sales.html
  var containerThree = document.createElement('div');
  containerThree.innerHTML = '<h2>Seattle Center</h2>';
  document.body.appendChild(containerThree);

  var listThree = document.createElement('ul');
  var listThreeArr = [];

  for(var c = 0; c < storeThreeHourlyTotals.length; c++) {
    listThreeArr.push(storeThreeHourlyTotals[c]);
  }
  listThreeArr.push(dailyTotalThree[dailyTotalThree.length - 1]);
  listThree.innerHTML = listThreeArr.join('');
  document.body.appendChild(listThree);

  // var storeThreeTotal = document.createElement('li');
  // storeThreeTotal.innerHTML = 'Total cookies sold: ' + dailyTotalThree[14];
  // document.body.appendChild(storeThreeTotal);
};
storeThreeDom();

//store four
var storeFour = { //starting with store one
  minCustomer: 20, //min customers, value given in problem domain
  maxCustomer: 38, //max customers given in problem domain
  avgCookiesCustomer: 2.3, //average cookies per sale given in problem domain
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

for(var r = 0; r < storeFour.hours.length; r++) {//this takes the total cookies per hour and pushes into an array
  storeFour.cookiesEachHour.push(storeFour.cookiesSoldPerHour());
  console.log(storeFour.cookiesEachHour[r]);
};

var storeFourHourlyTotals = [];
for(var s = 0; s < storeFour.hours.length; s++) { //this turns hour and cookies per hour data and pushes into an array as a string
  storeFourHourlyTotals.push('<li>' + storeFour.hours[s] + ': ' + Math.floor(storeFour.cookiesEachHour[s]) + ' cookies sold</li>');
  console.log(storeFourHourlyTotals[s]);
};

var dailyTotalFour = [];
var totalFour = 0; //this will calculate total cookies sold by end of day
for(var t = 0; t < storeFour.hours.length; t++) {
  totalFour += Math.floor(storeFour.cookiesEachHour[t]);
  dailyTotalFour.push('<li>Total Cookies sold: ' + totalFour + '</li>');
  console.log(dailyTotalFour[dailyTotalFour.length - 1]); //this is the total number of cookies sold
};

function storeFourDom (){ //Adding list to sales.html
  var containerFour = document.createElement('div');
  containerFour.innerHTML = '<h2>Capitol Hill</h2>';
  document.body.appendChild(containerFour);

  var listFour = document.createElement('ul');
  var listFourArr = [];

  for(var d = 0; d < storeFourHourlyTotals.length; d++) {
    listFourArr.push(storeFourHourlyTotals[d]);
  }
  listFourArr.push(dailyTotalFour[dailyTotalFour.length - 1]);
  listFour.innerHTML = listFourArr.join('');
  document.body.appendChild(listFour);

  // var storeFourTotal = document.createElement('li');
  // storeFourTotal.innerHTML = 'Total cookies sold: ' + dailyTotalFour[14];
  // document.body.appendChild(storeFourTotal);
};
storeFourDom();

//store five
var storeFive = { //starting with store one
  minCustomer: 2, //min customers, value given in problem domain
  maxCustomer: 16, //max customers given in problem domain
  avgCookiesCustomer: 4.6, //average cookies per sale given in problem domain
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

for(var u = 0; u < storeFive.hours.length; u++) {//this takes the total cookies per hour and pushes into an array
  storeFive.cookiesEachHour.push(storeFive.cookiesSoldPerHour());
  console.log(storeFive.cookiesEachHour[u]);
};

var storeFiveHourlyTotals = [];
for(var v = 0; v < storeFive.hours.length; v++) { //this turns hour and cookies per hour data and pushes into an array as a string
  storeFiveHourlyTotals.push('<li>' + storeFive.hours[v] + ': ' + Math.floor(storeFive.cookiesEachHour[v]) + ' cookies sold</li>');
  console.log(storeFiveHourlyTotals[v]);
};

var dailyTotalFive = [];
var totalFive = 0; //this will calculate total cookies sold by end of day
for(var w = 0; w < storeFive.hours.length; w++) {
  totalFive += Math.floor(storeFive.cookiesEachHour[w]);
  dailyTotalFive.push('<li>Total Cookies sold: ' + totalFive + '</li>');
  console.log(dailyTotalFive[dailyTotalFive.length - 1]); //this is the total number of cookies sold
};

function storeFiveDom (){ //Adding list to sales.html
  var containerFive = document.createElement('div');
  containerFive.innerHTML = '<h2>Alki</h2>';
  document.body.appendChild(containerFive);

  var listFive = document.createElement('ul');
  var listFiveArr = [];

  for(var e = 0; e < storeFiveHourlyTotals.length; e++) {
    listFiveArr.push(storeFiveHourlyTotals[e]);
  }
  listFiveArr.push(dailyTotalFive[dailyTotalFive.length - 1]);
  listFive.innerHTML = listFiveArr.join('');
  document.body.appendChild(listFive);

  // var storeFiveTotal = document.createElement('li');
  // storeFiveTotal.innerHTML = 'Total cookies sold: ' + dailyTotalFive[14];
  // document.body.appendChild(storeFiveTotal);
};
storeFiveDom();
