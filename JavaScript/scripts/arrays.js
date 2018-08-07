var ages = [ 32, 33, 16, 40, 15, 4, 18, 912, 543, 33 ];
var demo, myName;
var names = [ 'abc', 'qqqqq', 'uuu', 'iii', '88787', 'qewrqer' ];

function started() {
  demo = document.getElementById( "demo" );
  myName = document.getElementById( "myName" );
  firstName = document.getElementById( "firstName" );
  middleName = document.getElementById( "middleName" );
  lastName = document.getElementById( "lastName" );
  initials = document.getElementById( "initials" );

  myList = document.getElementById( "myList" );
  start = document.getElementById( "start" );
  count = document.getElementById( "count" );
  splice = document.getElementById( "splice" );
  result = document.getElementById( "result" );
}

function spliceMyList () {
  strList = myList.value;
  aList = strList.split(' ');
  strList = splice.value;
  aSplice = strList.split(' ');
  bList = aList.splice(parseInt(start.value), parseInt(count.value), aSplice );
  result.innerHTML = aList;
}

function sliceMyList () {
  strList = myList.value;
  aList = strList.split(' ');
  bList = aList.slice(start.value, count.value );
  result.innerHTML = bList;
}

function whatsMyName() {
  var fullName = myName.value;
  firstName.innerHTML = '';
  middleName.innerHTML = '';
  lastName.innerHTML = '';
  names = fullName.split( ' ' );
  init = '';
  if ( names.length >= 1 ) {
    firstName.innerHTML = names[ 0 ];
    init = names[ 0 ].substring(0,1);
  }
  if ( names.length > 2 ) {
    middleName.innerHTML = names[ 1 ];
  }
  if ( names.length >= 1 ) {
    lastName.innerHTML = names[ names.length-1 ];
  }
  initials.innerHTML = init;

}

function myFunction1() {
  demo.innerHTML = "";
  for ( var i = 0; i < names.length; i++ ) {
    demo.innerHTML += names[ i ] + "<br>";
  }
}

function myFunction2() {
  demo.innerHTML = "";
  demo.innerHTML += "5= " + ages[ 5 ] + "<br>";
  let total = 0,
    max = 0;
  ages.sort().reverse();
  for ( var i = 0; i < ages.length; i++ ) {
    if ( max < ages[ i ] )
      max = ages[ i ];
    total += ages[ i ];
    demo.innerHTML += "ages[" + i + "]: " + ages[ i ] + "<br>";
  }
  demo.innerHTML += "5= " + ages[ 5 ] + "<br>";
  demo.innerHTML += "total= " + total + "<br>";
  demo.innerHTML += "reduce -    " + ages.reduce( getSum ) + "<br />";
}

function getSum( total, num ) {
  return total * num;
}

function listArray( item, index ) {
  demo.innerHTML += "index[" + index + "]: " + item + "<br>";
}

function checkAdult( age ) {
  return age >= 18;
}

function myFunction3() {
  demo.innerHTML = "";
  demo.innerHTML += "reduce -    " + ages.reduce( getDiff ) + "<br />";
  demo.innerHTML += "reduce Diff-" + ages.reduceRight( getDiff ) + "<br />";
  demo.innerHTML += "reduceRight " + ages.reduceRight( getSum ) + "<br />";
  ages.map( Math.sqrt ).forEach( listArray );
  demo.innerHTML += "every       " + ages.every( checkAdult ) + "<br />";
  demo.innerHTML += "includes    " + ages.includes( checkAdult ) + "<br />";
  demo.innerHTML += "find        " + ages.find( checkAdult ) + "<br />";
  demo.innerHTML += "includes    " + ages.includes( 16, 2 ) + "<br />";
  demo.innerHTML += "findIndex   " + ages.findIndex( checkAdult ) + "<br />";
  demo.innerHTML += "some        " + ages.some( checkAdult ) + "<br />";
  demo.innerHTML += "indexOf     " + ages.indexOf( 33 ) + "<br />";
  demo.innerHTML += "lastIndexOf " + ages.lastIndexOf( 33 ) + "<br />";
  demo.innerHTML += "filter      " + ages.filter( checkAdult ) + "<br />";

  ages.splice( 2, 0, "99", "666", "Tony" );
  let small = ages.slice( 3, 5 );

  ages.forEach( listArray );
  small.forEach( listArray );
}

function getDiff( total, num ) {
  return total - num;
}
