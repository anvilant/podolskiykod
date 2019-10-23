const print = document.getElementsByClassName('print'),
    web = document.getElementsByClassName('web'),
    user = document.getElementsByClassName('user'),
    mock = document.getElementsByClassName('mock'),
    printIMG = document.getElementsByClassName('printIMG'),
    webIMG = document.getElementsByClassName('webIMG'),
    userIMG = document.getElementsByClassName('userIMG'),
    mockIMG = document.getElementsByClassName('mockIMG');

let showStatus = getComputedStyle(printIMG[0]);
console.log(showStatus.display);
function displayOff (print) {
    webIMG[0].style.display = 'none';
    userIMG[0].style.display = 'none';
    printIMG[0].style.display = 'block';
    mockIMG[0].style.display = 'none';
}
function displayOn (print) {
    webIMG[0].style.display = 'block';
    userIMG[0].style.display = 'block';
    printIMG[0].style.display = 'block';
    mockIMG[0].style.display = 'block';
}
function finish (print) {
    if (webIMG[0].style.display == 'block' && userIMG[0].style.display == 'block' && mockIMG[0].style.display == 'block') {
        displayOff(print);
    } else {
        displayOn(print); 
    }
}
