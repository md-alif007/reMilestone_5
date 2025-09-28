// option 2 for event handling 
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3 for event handling
const btnMakeyellow = document.getElementById('btn-make-yellow');

btnMakeyellow.onclick = function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}