
class A { // class
    constructor (c) {
        this.c = c; // instance
    }
    b = "b"; // instance
    d = "d"; // instance
    static e = "e"; // instance
    static f() { console.log("THIS IS 'F' fuckers!!!"); } // proto
    j() { console.log("THIS IS 'J' fuckers!!!"); } // proto
    h() { console.log("THIS IS 'H' fuckers!!!"); } // proto
}












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



