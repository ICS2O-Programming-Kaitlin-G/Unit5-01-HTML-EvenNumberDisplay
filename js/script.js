// Created by: Katie
// Created on: May 2022
// This file contains the JS functions for index.html

// this function will count from the user's entered min number to the user's entered max number. 
function numberCountClicked() {
  //initializing variables
  let userMin = parseInt(document.getElementById('minimum').value);
  let userMax = parseInt(document.getElementById('maximum').value);
  let counter = userMin
  //initialize the number display element as an empty string
  let numbers = ""
  //the while loop that will make the count happen
  while (counter <= userMax) {
   numbers = numbers + counter + '<br>'
    counter = counter + 1
  }
  //display the results back to the user
  document.getElementById('counted-numbers').innerHTML = numbers
}