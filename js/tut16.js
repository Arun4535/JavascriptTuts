console.log("we are in tut16");

let element = document.createElement('li');
element.className = "childul";//adding class to element
element.id = "createdLi" //adding id to elemeent
element.setAttribute('list-style-type','square');

//3ways to add value
// element.innerText = "first way";
// element.innerHTML = "<b>second way<b>";

let text = document.createTextNode("3rd way of adding text")
element.appendChild(text);

let ul = document.querySelector('ul.this');
ul.appendChild(element);

// console.log(element);


//Replacing a element
//replacing above added element be element2

let element2 = document.createElement('h3');
element2.className = "element2";
element2.id = "element2";
//  element2.classList.add("c2");//adding multiple classes
let textNode = document.createTextNode("Replacing text");
element2.appendChild(textNode);

element.replaceWith(element2)
// console.log(element2);


// //Replacing a child
// let myul = document.getElementById('myul');
// myul.replaceChild(element , document.getElementById('fui'));

// //division.replaceChild(new-element , one child of division)


// //removing an element
// myul.removeChild(document.getElementById('lui'));



//checking attributes
console.log(element2);
console.log(element2.className);
console.log(element2.id);
console.log(element2.hasAttribute('class'));
console.log(element2.hasAttribute('href'));
element2.removeAttribute('id');
console.log(element2);
element2.setAttribute('id' , 'elementId')
console.log(element2);
