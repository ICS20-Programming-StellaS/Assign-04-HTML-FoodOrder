// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
// declare constants
  const SNACK_PRICE = 3.78
  const MEDIUM_PRICE = 5.27
  const LARGE_PRICE = 7.69
  
  let giftSelected = false
  let sizePrice = 0
	
	// get age and day of the week
	let select = document.getElementById('size');
	let size = select.options[select.selectedIndex].value;	
	let select_a = document.getElementById('flavour');
	let flavours = select.options[select_a.selectedIndex].value;

  	
	if (age < 5 || age > 95) {
		cost = "The cost for you is FREE! Have Fun!"
	}
	else if ((day == "Tuesday") || ((day == "Thursday")) 
			 || (age >=12) && (age <=21)) {
		cost = "Lucky you! You get a student discount. Enjoy!"
	}
	else if ((age > 0) || (day != "")) {		
		cost = "No discount for you. You have to pay regular price."
	}
	
  	// display the results
  	document.getElementById('display-results').innerHTML = cost
}
