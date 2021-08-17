links = document.links;
// console.log(links);
link = Array.from(links);
// console.log(link);
let href;
Array.from(links).forEach(function(element){
    // console.log(String(element));
    href = element.href;
    if(String(href).includes("youtu")){
    console.log(String(element));
    }
});