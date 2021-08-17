links = document.links; //all links on the webpage
// console.log(links);
link = Array.from(links); //converting into array, and checking each value if it contains youtube link
// console.log(link);
let href;
Array.from(links).forEach(function(element){
    // console.log(String(element));
    href = element.href;
    if(String(href).includes("youtu")){
    console.log(String(element));
    }
});