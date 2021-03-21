// SPECIFY TARGET DOM EVENT HANDLERS:
const list = [...document.querySelectorAll('.piano__key')];

// key listeners
document.addEventListener('keydown', pianoKeydown);
document.addEventListener('keyup', pianoKeyup);

// mouse listeners
list.forEach(node => node.addEventListener('mousedown',  pianoMousedown));
list.forEach(node => node.addEventListener('mouseup',    pianoMouseup));
list.forEach(node => node.addEventListener('mouseover',  pianoMouseover));
list.forEach(node => node.addEventListener('mouseleave', pianoMouseleave));





// IMPLEMENTATION:
// key manipulation
function pianoKeydown(e) {
    console.log('KEY DOWN:', e.code);
}
function pianoKeyup(e) {
    console.log('KEY UP:', e.code);
}

// mouse manipulation
function pianoMousedown(e) {
    console.log('MOUSE DOWN:', e.target.dataset.code);
}
function pianoMouseup(e) {
    console.log('MOUSE UP:', e.target.dataset.code);
}
function pianoMouseover(e) {
    console.log('MOUSE OVER:', e.target.dataset.code);
}
function pianoMouseleave(e) {
    console.log('MOUSE LEAVE:', e.target.dataset.code);
}
