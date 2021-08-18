let divElement = document.createElement('div')
let text = document.createTextNode('Edit me.....')
divElement.appendChild(text);

divElement.setAttribute('id','elem');
divElement.setAttribute('class','elem')
divElement.setAttribute('style', 'border:2px solid red;width:150px;margin:20px;padding:20px')

let container = document.querySelector('.container');
let first = document.querySelector('#myfirst')


//Insert element before first
container.insertBefore(divElement,first);

divElement.addEventListener('click', function(){
    
})

// console.log(divElement,container,first);