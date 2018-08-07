function function0() {
  var name = 'Gary James';
  var age = 63;
  var programmer = true;
  console.log("My name is " + name +
    " and I am " + age + " years old. " +
    " And next year I will be " + ++age + 
    ". Am I a programmer? " + programmer);
}
// let field1 = document.getElementById('field1');
// field1.innerHTML = "My name is " + name + " and I will be " +
//                 age + " years old next " + ++age + " year. Am I a programmer? " + programmer;

function function1() {
  let field1 = document.getElementById('field1');
  let newColor = getColor();
  field1.innerHTML = newColor;
  field1.style.color = newColor;
}

function function2() {
  let field1 = document.getElementById('field1');
  let newColor = getColor();
  field1.innerHTML = newColor;
  document.body.style.backgroundColor = newColor;
}

function function3(value) {
  field1.innerHTML = articles[value];
}

function getColor() {
  let newColor = '#';
  for (var i = 0; i < 6; i++)
    newColor += '0123456789ABCDEF' [randInRange(16)]
  return newColor;
}

function randInRange(range) {
  var myNum = Math.random() * range;
  return Math.floor(myNum);
}

let articles = [];
articles.push(
  'The Constitution is our plan for government. The Articles of the Constitution talk about the duties of the three main parts of government: the Executive Branch, the Legislative Branch, and the Judicial Branch. The articles also talk about the separate powers of the Federal and State government, and how to change the Constitution.'
);
articles.push('Article 1: Legislative Branch: the U.S. Congress makes the laws for the United States. Congress has two parts, called "Houses," the House of Representatives and the Senate.');
articles.push('Article 2: Executive Branch: the President, Vice-President, Cabinet, and Departments under the Cabinet Secretaries carry out the laws made by Congress.');
articles.push('Article 3: Judicial Branch: the Supreme Court decides court cases according to US Constitution. The courts under the Supreme Court decide criminal and civil court cases according to the correct federal, state, and local laws.');
articles.push(
  'Article 4: States powers: States have the power to make and carry out their own laws. State laws that are related to the people and problems of their area. States respect other states laws and work together with other states to fix regional problems.'
);
articles.push('Article 5: Amendments: The Constitution can be changed. New amendments can be added to the US Constitution with the approval by a two-thirds vote in each house of Congress (67, 281) and three-fourth vote by the states (38).');
articles.push('Article 6: Federal powers: The Constitution and federal laws are higher than state and local laws. All laws must agree with the US Constitution.');
articles.push(
  'Article 7: Ratification: The Constitution was presented to George Washington and the men at the Constitutional Convention on September 17, 1787, Representatives from twelve out of the thirteen original states signed the Constitution. From September 1787 to July 1788, the states meet, talked about, and finally voted to approve the Constitution.'
);
