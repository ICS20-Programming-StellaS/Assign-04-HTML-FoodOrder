// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

function orderSent() {
  //setting a constant for tax
  const SNACK_PRICE = 3.78;
  const MED_PRICE = 5.27;
  const LAR_PRICE = 7.69;
  const PROT_PRICE = 4.00;
  const FRUIT_PRICE = 4.00;
  const HST = 0.13;
  
  //initializing variables
  let baseSmoothCost = 0;
  
  //declaring variables for base and sides
  let Size = document.getElementById("size").value;
  let Flavour = document.getElementById("flavour").value;
  let Extra = document.getElementById("extra").value;

  //determining the number of checkboxes checked (number of toppings selected) - method found at https://www.techiedelight.com/count-number-check-boxes-javascript/
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let numExtra = checkboxes.length;
  
  //determining the cost of the base using compound if/then statements
  
  //if the doughnut flavour is vanilla and the size is single
  if ((size == "")) {

  }
  else if ((Flavour == "Banana") && (Size == "snack")) {
    baseSmoothCost = SNACK_PRICE;
  }
    
  //if the doughnut flavour is vanilla and the size is single
  else if ((Flavour == "Berry") && (Size == "snack")) {
    baseSmoothCost = SNACK_PRICE;
  }
    
  //if the doughnut flavour is vanilla and the size is single
  else if ((Flavour == "Tropical") && (Size == "snack")) {
    baseSmoothCost = SNACK_PRICE;
  }
    
  //if the doughnut flavour is vanilla and the size is single
  else if ((Flavour == "Green") && (Size == "snack")) {
    baseSmoothCost = SNACK_PRICE;
  }

  else if ((Flavour == "Banana") && (Size == "medium")) {
    baseSmoothCost = MED_PRICE;
  }

  else if ((Flavour == "Berry") && (Size == "medium")) {
    baseSmoothCost = MED_PRICE;
  }
    
  else if ((Flavour == "Tropical") && (Size == "medium")) {
    baseSmoothCost = MED_PRICE;
  }

  else if ((Flavour == "Green") && (Size == "medium")) {
    baseSmoothCost = MED_PRICE;
  }

  else if (Size == "large") {
    baseSmoothCost = LAR_PRICE;
  }
  
  //calculating the subtotal, tax and total
  let subtotal = baseSmoothCost + costExtra;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  //displaying the totals to the screen
  document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}