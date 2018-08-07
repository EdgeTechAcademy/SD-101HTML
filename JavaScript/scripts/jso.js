window.onload = computeSubtotal;

function artPiece( id, name, desc, price ) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.price = price;
  this.priceEuros = convertToEuros;
  this.displayItem = function () {
    return "<tr><td>" + this.id + "</td>" +
      "<td>" + this.name + "</td>" +
      "<td>" + this.desc + "</td>" +
      "<td style='width:100px; text-align: right;'>" + this.price + "</td></tr>";
  }
}

function convertToEuros() {
  return Math.round( this.price * 0.94, 2 );
}

function computeSubtotal() {
  //creates new artPiece object instances and stores in purchases array
  purchases[ 0 ] = new artPiece( 1002, "Persistence of Memory", "3' X 5' poster", 14.99 );
  purchases[ 1 ] = new artPiece( 1003, "Ship With Butterfly Sails", "postcard", 3.99 );
  purchases[ 2 ] = new artPiece( 1004, "Other Wierd Stuff", "napkin", 33.33 );
  purchases[ 3 ] = new artPiece( 1005, "Blank Canvas", "canvas", 101.99 );

  showCart();
}

function addToCart() {
  purchases.push( new artPiece(
    document.getElementById( 'ID' ).value,
    document.getElementById( 'name' ).value,
    document.getElementById( 'description' ).value,
    document.getElementById( 'price' ).value
  ) );
  showCart();
}

var purchases = [];

function showCart() {
  var subtotal = 0;
  var subtotalEuros = 0;
  var itemsTable = "<table><tr><th>ID</th><th>Name</th><th>Desc</th><th>Price</th></tr>";
  //cycles through array summing price property
  for ( var n = 0; n < purchases.length; n++ ) {
    subtotal += purchases[ n ].price;
    itemsTable += purchases[ n ].displayItem();
  }
  //display results
  document.getElementById( 'divItems' ).innerHTML = itemsTable + "</table>";
  document.getElementById( 'divSubtotal' ).innerHTML = "Subtotal: $" + subtotal;
  document.getElementById( 'divAvePrice' ).innerHTML = "Average Price: $" + subtotal / purchases.length;
}
