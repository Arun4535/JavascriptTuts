console.log("We are in tut14");

/*
Element selector
1.Single element selector
2.Multi element selector

*/
// let element = document.getElementById("first");
// let cn = element.className;
// let pn = element.parentNode;
// console.log(element);
// console.log("class name " + cn);
// console.log("parent node is");
// console.log(pn);
// element.style.color = "red";
// element.innerText= "arun is a coder"
// element.innerHTML  = "<b>Web Developer</b>"
// console.log(element.innerHTML);
// console.log(element.innerText);




// let sel = document.querySelector(".child");
// let bold = document.querySelector("b")
// let heading = document.querySelector("h1")
// console.log(sel);
// console.log(bold);
// console.log(heading);



// let first_div = document.querySelector("div");
// console.log(first_div);
// first_div.style.color = "green";


//2.Multi element selector
//selecting use class name



// let element = document.getElementsByClassName("container");
// let inside_container = document.getElementsByClassName("child")
// console.log(inside_container)



//by tag name
let tag = document.getElementsByTagName('div')
// console.log(tag);

//lets iterate and make every div text to blue
Array.from(tag).forEach(element => {
    element.style.color = "blue";
})