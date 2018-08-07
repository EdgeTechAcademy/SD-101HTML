window.onload = computeSubtotal;

function artPiece( id, name, desc, price ) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.price = price;
  this.priceEuros = convertToEuros;
  this.displayItem = function () {
    return "<tr><td onclick='details(" + this.id + ")'>" + this.id + "</td>" +
      "<td>" + this.name + "</td>" +
      "<td onclick='deleteMe(" + this.id + ")'>" + this.desc + "</td>" +
      "<td style='width:100px; text-align: right;'>" + this.price + "</td></tr>";
  }
}
function bigSale() {

  showCart();
}

function details( id ) {
  for ( var i = 0; i < purchases.length; i++ ) {
    if ( purchases[ i ].id == id ) {
      let details = "This item " + purchases[ i ].name +
        " is for sale for $" + purchases[ i ].price;
      document.getElementById( 'divDetails' ).innerHTML = details;
    }
  }
}

function deleteMe( id ) {
  for ( var i = 0; i < purchases.length; i++ ) {
    if ( purchases[ i ].id == id ) {
      purchases.splice(i, 1);
      showCart();
      break;
    }
  }
}


function convertToEuros() {
  return Math.round( this.price * 0.94, 2 );
}

var purchases = [];

function computeSubtotal() {
  //creates new artPiece object instances and stores in purchases array
  purchases[ 0 ] = new artPiece( 1002, "Persistence of Memory", "3' X 5' poster", 14.99 );
  purchases[ 1 ] = new artPiece( 1003, "Ship With Butterfly Sails", "postcard", 3.99 );

  showCart();
}

function showCart() {
  var subtotal = 0;
  var itemsTable = "<table><tr><th>ID</th><th>Name</th><th>Desc</th><th>Price</th></tr>";
  //cycles through array summing price property
  for ( var n = 0; n < purchases.length; n++ ) {
    subtotal += purchases[ n ].price;
    itemsTable += purchases[ n ].displayItem();
  }
  //display results
  document.getElementById( 'divItems' ).innerHTML = itemsTable + "</table>";
  document.getElementById( 'divSubtotal' ).innerHTML = "Subtotal: $" + subtotal;
  document.getElementById( 'divAverage' ).innerHTML = "Average: $" + subtotal / purchases.length;
}

function addToCart() {
  let idValue    = document.getElementById( 'ID' ).value;
  let nameValue  = document.getElementById( 'name' ).value;
  let descValue  = document.getElementById( 'description' ).value;
  let priceValue = parseFloat( document.getElementById( 'price' ).value );
  let thatThing = new artPiece( idValue, nameValue, descValue, priceValue );
  purchases.push( thatThing );

  showCart();
}
