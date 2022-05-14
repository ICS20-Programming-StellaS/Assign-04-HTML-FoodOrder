// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

function calcOrder() {
  //setting a constant for tax
  const SNACK_PRICE = 3.78;
  const MED_PRICE = 5.27;
  const REG_PRICE = 7.69;
  const PROT_PRICE = 5.00;
  const FRUIT_PRICE = 4.00;
  const SWEE_PRICE = 3.00;
  const SCONE_PRICE = 2.67
  const BITES_PRICE = 2.98
  const CUP_PRICE = 1.79
  const COOKIE_PRICE = 2.56
  const HST = 0.13;

  	// initialize variables
  let sizePrice = 0
  let extraPrice = 0
  let sidePrice = 0
  
  //declaring variables for base and sides
  let size = document.getElementById("size").value;
  let extra = document.getElementById("extra").value;
  let side = document.getElementById("side").value;

  // smoothie size
  if (size == "snack")  {
		sizePrice = SNACK_PRICE 
	}
	else if (size == "medium") {
		sizePrice = MED_PRICE
	}
	else if (size == "regular") {
		sizePrice = REG_PRICE
	}
  
  // smoothie extras
   if (extra == "protein") {
		extraPrice = PROT_PRICE
	}
     
	else if (extra == "fruit") {
		extraPrice = FRUIT_PRICE
  }
    
	else if (extra == "sweetener") {
		extraPrice = SWEE_PRICE
	}

  // smoothie sides
   if (side == "scone") {
		sidePrice = SCONE_PRICE
	}
     
	else if (side == "bites") {
		sidePrice = BITES_PRICE
  }
    
	else if (side == "cup") {
		sidePrice = CUP_PRICE
	}

	else if (side == "cookie") {
		sidePrice = COOKIE_PRICE
  }
  

  // Totals
	let subtotal = sizePrice + extraPrice + sidePrice
  let tax = subtotal * HST
  let total = subtotal + tax

  //displaying the totals to the screen
  document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + "<br>The amount of HST added is $" + tax.toFixed(2) +"<br>Your total is $" + total.toFixed(2)
}

