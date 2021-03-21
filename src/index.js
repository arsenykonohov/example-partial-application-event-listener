function setUpListeners(cb) { // aka 'RUN'
    const list = [...document.querySelectorAll('.piano__key')];
    // NOTE: cb means 'callback'
    if (typeof cb === 'function') {
        // NOTE: here is just no line breaks
        // NOTE: here is regular function definition
        // ---------------------------------------------
        // key listeners:
        document.addEventListener('keydown', function (e) { cb(e); });
        document.addEventListener('keyup',   function (e) { cb(e); });
        // mouse listeners:
        list.forEach(node => node.addEventListener('mousedown',  function (e) { cb(e); }));
        list.forEach(node => node.addEventListener('mouseup',    function (e) { cb(e); }));
        list.forEach(node => node.addEventListener('mouseover',  function (e) { cb(e); }));
        list.forEach(node => node.addEventListener('mouseleave', function (e) { cb(e); }));
    } else {
        console.error('You have to use function definition as callback!');
    }
}

setUpListeners(function (event) {
    const type = event.type;
    const target = event.target;
    console.log('EVENT:', type);
    // switch (true) {
    //     case '': return;
    //     case '': return;
    //     case '': return;
    //     case '': return;
    //     case '': return;
    //     default: console.log('default');
    // }
});



// ====================================================================================
// IMPLEMENTATION:
// key manipulation
