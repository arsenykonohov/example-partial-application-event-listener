
function A (c) {
    this.b = "b"; // instance
    this.c = c; // instance
    this.d = "d"; // instance
    this.h = function h() { console.log("THIS IS 'H' fuckers!!!"); } // NOT proto BUT instance
}
A.e = "e"; // staic
A.f = function f() { console.log("THIS IS 'F' fuckers!!!"); } // staic
A.prototype.j = function j() { console.log("THIS IS 'J' fuckers!!!"); } // proto












var x = new A('this is "C" yeah!!!'); // instance

// console.log('x - ', x);
console.log('x.a - ', x.a);
console.log('x.b - ', x.b);
console.log('x.c - ', x.c);
console.log('x.d - ', x.d);
console.log('x.e - ', x.e);
console.log('x.f - ', x.f);
console.log('x.j - ', x.j);
console.log('x.h - ', x.h);
// console.log('--------------------------------');
// console.log('x.f() - ', x.f());
// console.log('x.j() - ', x.j());
// console.log('x.h() - ', x.h());



