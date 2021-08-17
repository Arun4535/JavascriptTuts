console.log("We are in tut18");

let btn = document.getElementById('btn');
btn.addEventListener('click' , function1);
btn.addEventListener('dblclick' , function2);//double click
btn.addEventListener('mousedown' , function3);//mousedown

function function1(e) {
    console.log("clicked!!" , e);
    //Now the dafault behaviour of html form is that whenever a button is clicked the form is submitted. to avoid that we will use prventDefault
    e.preventDefault();
}
function function2(e) {
    console.log("double clicked!!" , e);
       e.preventDefault();
}
//when you double click,funtion1 executes twice,function2 executes once.

function function3(e) {
    console.log("mouse down!!" , e);
       e.preventDefault();
}


//Mouseenter and mouseleave event
document.querySelector('.no').addEventListener('mouseenter' , function(){
    console.log("you entered no");
});
document.querySelector('.no').addEventListener('mouseleave' , function(){
    console.log("you exited no");
});


//Mouse move event
document.querySelector('.container').addEventListener('mousemove' , function(e){
    // console.log(e.offsetX , e.offsetY);
    var x= e.offsetX % 255;
    var y = e.offsetY % 255;
    // console.log(x,y);
    document.body.style.background = `rgb(${x} , ${y} , ${(x+y)%255})`;
    console.log("mouse is moving");
});