//wait for the DOM elements to load before executing
$(document).ready(function() {

// create a function when city/place/word is entered
function cityHasBeenEntered () {

// prevent the submit button from refresshing te page
event.preventDefault();
console.log("hola");

// get the value of the #city-type and correct for capitalization
var cityvalue = $('#city-type').val();

cityvalue = cityvalue.toLowerCase().trim();

// if the user inputs New York, New York City, NYC, change the css class to nyc
if(cityvalue == 'new york' || cityvalue == 'new york city' || cityvalue == "nyc")
$('body').attr("class", "nyc");


// if the user inputs San Fracisco, SF, or Bay Area, change the css class to SF
if(cityvalue == 'san francisco' || cityvalue == 'sf' || cityvalue == "bay area")
$('body').attr("class", "sf");

// if the user inputs LA, LAX, change the css class to la
if(cityvalue == 'la' || cityvalue == 'lax')
$('body').attr("class", "la");

// if the user inputs Austin, ATX, change the css class to auston
if(cityvalue == 'austin' || cityvalue == 'atx')
$('body').attr("class", "austin");

// if the user inputs Sydney, SYD, change the css class to sydner
if(cityvalue == 'sydney' || cityvalue == 'syd')
$('body').attr("class", "sydney");
}

$('#submit-btn').click(cityHasBeenEntered);

});