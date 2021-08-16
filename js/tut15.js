console.log("We are in tut15");

// let cont = document.querySelector(".no");
// cont = document.querySelector(".container")
// console.log(cont);

// console.log(cont.childNodes); //also includes text,comments,whitespaces,line as childs

// console.log(cont.children);//only considers elements

// let nodeName = cont.childNodes[1].nodeName; //0th child space/text,again index2 have text/spaces
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);

//Node types list
// 1. elements
// 2. Attribute
// 3. Text node
// 8.comments
// 9. document
// 10. doctype





let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children); //chainning

// console.log(container.childNodes);
// console.log(container.children);

// console.log(container.firstChild); //first child refering childNodes
// console.log(container.firstElementChild); //first child refering children


// console.log(container.lastChild);
// console.log(container.lastElementChild);
//if we remove the space in tut15.html:line 31,between </form> and <div>,we get both lastChild and lastElementChild as same


// console.log(container.childElementCount);//count of element childs

// console.log(container.firstElementChild);

// console.log(container.firstElementChild.parentNode);

// console.log(container.firstElementChild.nextSibling);//next of heading as text

// console.log(container.firstElementChild.nextElementSibling);

// console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling); //chainning