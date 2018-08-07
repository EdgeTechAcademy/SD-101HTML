var flight = 418.12;
var hotel = 113.85;
var car = 99.99;
const TAX_RATE = 0.0825;
var subtotal, tax, total;

//flight+hotel
subtotal = flight+hotel;
displayTaxAndTotal("Flight + hotel = $", subtotal);

//flight+car
subtotal = flight+car;
displayTaxAndTotal("Flight + car = $", subtotal);

//flight+hotel+car
subtotal = flight+hotel+car;
displayTaxAndTotal("Flight + hotel + car = $", subtotal);

function displayTaxAndTotal(subtotal) {
  tax = subtotal * TAX_RATE;
  total = subtotal + tax;
  console.log("tax = $"+tax.toFixed(2));
  console.log("total = $"+total.toFixed(2));
  console.log("-------------------";)
}
