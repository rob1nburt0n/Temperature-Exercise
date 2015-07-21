/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
  
  °C  x  9/5 + 32 = °F

  (°F  -  32)  x  5/9 = °C */



function toCelsius (inputFah) {
  return(inputFah -32) * (5/9);
}

function toFahrenheit (inputCel) {
  return(inputCel * 9/5) + 32;
}

// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (e) {

  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  var optionChosen = document.getElementsByName("conversion_type");
  var temp = document.getElementById("temp");
  // for loop
  for (var x = 0; x < optionChosen.length; x++) {
    if (optionChosen[x].checked && optionChosen[x].value === "celsius") {
     document.write(toCelsius(temp.value));
    }
    else if (optionChosen[x].checked && optionChosen[x].value === "fahrenheit") {
     document.write(toFahrenheit(temp.value));
    }
  }// end for loop
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;
