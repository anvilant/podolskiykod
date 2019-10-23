const print = document.getElementsByClassName('print'),
    web = document.getElementsByClassName('web'),
    user = document.getElementsByClassName('user'),
    mock = document.getElementsByClassName('mock'),
    printIMG = document.getElementsByClassName('printIMG'),
    webIMG = document.getElementsByClassName('webIMG'),
    userIMG = document.getElementsByClassName('userIMG'),
    mockIMG = document.getElementsByClassName('mockIMG');

printIMG[0].hidden = true;
console.log(printIMG[0].hidden);
printIMG[0].hidden = false;
console.log(printIMG[0].hidden);

function printF () {
    webIMG[0].hidden = true;
    mockIMG[0].hidden = true;
    userIMG[0].hidden = true;
    printIMG[0].hidden = false;
}
function webF () {
    mockIMG[0].hidden = true;
    userIMG[0].hidden = true;
    printIMG[0].hidden = true;
    webIMG[0].hidden = false;
}
function userF () {
    mockIMG[0].hidden = true;
    userIMG[0].hidden = false;
    printIMG[0].hidden = true;
    webIMG[0].hidden = true;
}
function mockF () {
    mockIMG[0].hidden = false;
    userIMG[0].hidden = true;
    printIMG[0].hidden = true;
    webIMG[0].hidden = true;
}
function allF () {
    mockIMG[0].hidden = false;
    userIMG[0].hidden = false;
    printIMG[0].hidden = false;
    webIMG[0].hidden = false;
}