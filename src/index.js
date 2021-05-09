function onHandleClick(el) {
    el.dataset.oneTwoThre="sldkjfsldkfjslkd";
    console.log('ONCLICK', el.dataset);
}








function setUpListeners(cb) { // aka 'RUN'
    const list = [...document.querySelectorAll('.piano__key')];
    const piano = document.querySelector('.piano');
    // application model:
    const model = {
        // NOTE: use object in case of SHARING MODEL of 'objects'
        // rather then 'primitives' (primitive types)
        isMouseDown: false,
        isMouseUp: false,
    };
    // NOTE: cb means 'callback'
    if (typeof cb === 'function') {
        // NOTE: here is just no line breaks
        // NOTE: here is regular function definitions
        // ---------------------------------------------
        // key listeners:
        document.addEventListener('keydown', function (event) { cb('keyboard', event, model); });
        document.addEventListener('keyup',   function (event) { cb('keyboard', event, model); });
        // mouse listeners:
        list.forEach(node => node.addEventListener('mousedown',  function (event) { cb('piano-key', event, model); }));
        list.forEach(node => node.addEventListener('mouseup',    function (event) { cb('piano-key', event, model); }));
        list.forEach(node => node.addEventListener('mouseover',  function (event) { cb('piano-key', event, model); }));
        // list.forEach(node => node.addEventListener('mouseleave', function (event) { cb('piano-key', event, model); }));
        piano.addEventListener('mouseleave', function (event) { cb('piano', event, model); });
    } else {
        console.error('You have to use function definition as callback!');
    }
}

setUpListeners(function (option, e, m) {
    // console.log('EVENT:', e.type);
    let code = ''; // TODO: do not use 'const', please check why...
    switch (true) {
        // ------------------------------------------------------
        // START of example: mouse down/up while mouse move
        // NOTE: you could use and modify these lines as you'd like
        case (e.type === 'mousedown'):
            code = e.target.dataset.code;
            m.isMouseDown = true;
            play(code);
            return;
        case (e.type === 'mouseup'):
            m.isMouseDown = false;
            return;
        case (e.type === 'mouseover'):
            code = e.target.dataset.code;
            m.isMouseDown ? play(code) : console.log('silence...');
            return;
        case (e.type === 'mouseleave' && option === 'piano'):
            m.isMouseDown = false;
            return;
        // END of example: mouse down/up while mouse move
        // ------------------------------------------------------
        case (e.type === 'keydown'):
            return;
        case (e.type === 'keyup'):
            return;
        default: console.log('default');
    }
});



// ====================================================================================
// IMPLEMENTATION:
// key manipulation
function play(id) {
    console.log('<SOUND>', id);
    // ---------------------------------------------
    // START: play emulation
    const node = document.getElementById(id);
    node.classList.add('active');
    setTimeout(function () {
        node.classList.remove('active');
    }, 300);
    // END: play emulation
    // ---------------------------------------------
}