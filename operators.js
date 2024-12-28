/*let a=5;
let b=a++ + --a;
let c=++b + b++;
a++;
console.log(a);
console.log(b);
console.log(c);*/

// let a = true;
// !!!!!!a;
// console.log(a);

//spread operator(...)
// let a=[1,2,3,4,5]
// let b=a //address of the a will be stored in the b
// b[2]=10;
// console.log(b); // output: [1,2,10,4,5]
// console.log(a); // output: [1,2,10,4,5]

// let a=[1,2,3,4,5]
// let b=[...a] //values of the 'a' will be stored in the b
// b[2]=10;
// console.log(b); // output: [1,2,10,4,5]
// console.log(a); // output: [1,2,3,4,5]

//adding two arrays using spread operators
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let x=[...a,...b];
// console.log(x);

//rest operator(...)
// let rest = (x,...values) =>{  //rest operator collects the different object using single object and variables before is used to seperate the values
//     console.log(x);
//     console.log(values);
// }
// rest(1,2,3,4);

//spread operator in object
// let student={
//     name: "nidhi",
//     age: 20
// }
// let b={...student};
// console.log(b);

//destructuring operation
// let a=[1,2,3,4,5];
// let [x,y,z,...value]=a;
// console.log(x);
// console.log(y);
// console.log(value);
var student={
    name: "nidhi",
    age: 20,
    address: "namakkal" 
}
let {name,age,...abc}=student;
console.log(name);
console.log(age);
//console.log(abc);