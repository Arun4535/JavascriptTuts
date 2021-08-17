console.log("We are in tut17");

let head = document.getElementById('heading');
head.addEventListener('click' , function(e){
    // console.log("You clicked the heading");
    // location.href= 'https://youtube.com';
    // console.log(e);

    let variable = e.target; //returns where we clicked

    // variable=e.target.className; //return class of element clicked

    // variable=e.target.classList; //return collection of class of element 
    // variable=Array.from(e.target.classList);//creating array from collection

    // variable=e.target.id;

    // variable= e.offsetX;//distance refering to head
    // variable= e.offsetY;

    // variable= e.clientX;//distance refering browser window 
    // variable = e.clientY;
    console.log(variable);
});

let head1 = document.getElementById('heading');
head.addEventListener('mouseover' , function(e){
    console.log("mouse over");
});

