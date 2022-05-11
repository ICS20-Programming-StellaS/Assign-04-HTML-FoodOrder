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
  const SNACK_PRICE = 3.78;
  const MED_PRICE = 5.27;
  const LAR_PRICE = 7.69;
  const PROT_PRICE = 4.00;
  const TOP_PRICE = 5.00;
  const PLAST_PRICE = 3.00;
  const SWE_PRICE = 4.00;
  const HST = 0.13;
  
// initialize variables
  let sizePrice = 0
  let extraPrice = 0
	
	// get age and day of the week	
	let sizeSelection = document.getElementById('size').value;
  let size = sizeSelection.options[sizeSelection.selectedIndex].value;
  
  let flavourSelection = document.getElementById('flavour').value;
  let flavour = flavourSelection.options[flavourSelection.selectedIndex].value;
  
  let extraSelection = document.getElementById('extra_a').value;
  let extra = extraSelection.options[extraSelection.selectedIndex].value;

  let extraSelection = document.getElementById('extra_b').value;
  let extra = extraSelection.options[extraSelection.selectedIndex].value;

  let extraSelection = document.getElementById('extra_c').value;
  let extra = extraSelection.options[extraSelection.selectedIndex].value;

  let extraSelection = document.getElementById('extra_d').value;
  let extra = extraSelection.options[extraSelection.selectedIndex].value;

  
  //find out price
  if (size == "Snack")  {
		sizePrice = Snack_PRICE 
	}
	else if (size == "Medium") {
		sizePrice = MED_PRICE
	}
	else if (size == "large") {
		sizePrice = LAR_PRICE
	}
  
  // extras
   if (extra == "protein") {
		extraPrice = PROT_PRICE
	}
	else if (extra == "fruit") {
		extraPrice = TOP_PRICE
	}
	else if (extra == "straw") {
		extraPrice = PLAST_PRICE
	}
  else if (extra == "sweetner") {
		extraPrice = SWE_PRICE
	}

  // Totals
	let subtotal = + extraPrice + sizePrice
  let tax = subtotal * HST
  let total = subtotal + tax
    	
  	// display the cost
  document.getElementById("display-cost").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}