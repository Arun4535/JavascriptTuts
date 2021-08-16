links = document.links;
console.log(links);
link = Array.from(links);
console.log(link);

Array.from(links).forEach(function(element){
    // console.log(String(element));
    if(String(element).includes("youtube")){
    console.log(String(element));
    }
});