// SPECIFY TARGET DOM EVENT HANDLERS:
const list = [...document.querySelectorAll('.piano__key')];
document.addEventListener('keydown', pianoKeydown);
document.addEventListener('keyup', pianoKeyup);
list.forEach(node => node.addEventListener('mousedown', pianoMousedown));
list.forEach(node => node.addEventListener('mouseup', pianoMouseup));
list.forEach(node => node.addEventListener('mouseover', pianoMouseover));



// IMPLEMENTATION:
// key
function pianoKeydown(e) {}
function pianoKeyup(e) {}

// mouse
function pianoMousedown(e) {}
function pianoMouseup(e) {}
function pianoMouseover(e) {}
