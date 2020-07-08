// const heading = document.querySelector('h1');
// heading.textContent = 'Hello World!';

let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/eggdog.jpg') {
        myImg.setAttribute('src', 'images/eggdog2.jpg');
    } else {
        myImg.setAttribute('src', 'images/eggdog.jpg');
    }
}