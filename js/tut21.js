let divElement = document.createElement('div')
let text = document.createTextNode('Edit me.....')
divElement.appendChild(text);

divElement.setAttribute('id', 'elem');
divElement.setAttribute('class', 'elem')
divElement.setAttribute('style', 'border:2px solid red;width:150px;margin:20px;padding:20px')

let container = document.querySelector('.container');
let first = document.querySelector('#myfirst')


//Insert element before first
container.insertBefore(divElement, first);

divElement.addEventListener('click', function () {

    let numTextArea = document.getElementsByClassName('textArea').length;
    console.log(elem);
    if (numTextArea == 0) {
        let html = elem.innerHTML;
        divElement.innerHTML = `<textarea class="form-control textArea" id="textarea" rows="3"> ${html} </textarea>`
    }


    //blur event
    let textArea = document.getElementById('textArea');
    textArea = document.addEventListener('blur', function () {
        elem.innerHTML = textArea;
    })
})


// add to local storage pending