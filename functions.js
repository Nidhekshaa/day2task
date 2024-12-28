// non parameterized + without return 
// function fruit(){
//     console.log("apple");
// }
// fruit();
// //non parameterized + with return 
// function fruit(){
//     let a="apple";
//     return a;
// }
// console.log(fruit());
// //with parameters + without return
// function fruit(a){
//     console.log(a);
// }
// var a="apple";
// fruit(a);
// //with parameters + with return
// function fruit(a){
//     return a;
// }
// var a="apple";
// let b=fruit(a);
// console.log(b);

// //arrow function
// let apple = () =>{
//     console.log("apple");
// }
// apple();

// let orange = () => "orange";
// console.log(orange());

// let banana = () =>{
//     console.log("banana");
//     return 1+2;
// }
// console.log(banana());

// arrow function with parameter
// let add = (a,b) =>a+b
// var a=1,b=2;
// console.log(add(a,b));

// let dog = (cat) =>{
//     setTimeout(()=>{
//         console.log("jimmy the dog");
//         cat();
//     },2000);
// }
// let cat = () =>{
//     console.log("rosy the cat");
// }
// dog(cat);

// let atttendence = (lunch) =>{
//     console.log("PRESENT");
//     lunch(home);
// }
// let lunch = (home) =>{
//     console.log("lunch completed");
//     home();
// }
// let home = () =>{
//     console.log("boarded the bus");
// }
// // atttendence(lunch);

// //callback hell
// atttendence(() =>{
//     lunch(() =>{
//         home(() =>{
//             console.log("Day completed");
//         })
//     })
// })

//Promise : instead of call back it is used
// function attendance()
// {
//     return new Promise((resolve,reject)=>
//     {
//         let att = true;
//         if(att)
//             resolve("present")
//         else 
//             reject("absent")
//     })
// }
// function lunch()
// {
//     return new Promise((resolve,reject)=>
//         {
//             let lun = false;
//             if(lun)
//                 resolve("had lunch")
//             else 
//                 reject("did not have lunch")
//         })
// }
// function go()
// {
//     return new Promise((resolve,reject)=>
//         {
//             let going = true;
//             if(going)
//                 resolve("went")
//             else 
//                 reject("hostel")
//         })
// }
// attendance().then((value)=>{console.log(value);return lunch()})
//             .then((value)=>{console.log(value);return go()})
//             .then((value)=>{console.log(value);})
//             .catch((err)=> console.error(err))

// function attendance()
//       {
//           return new Promise((resolve,reject)=>
//           {
//               let att = true;
//               if(att)
//                   resolve("present")
//               else 
//                   reject("absent")
//           })
//       }
//       function lunch()
//       {
//           return new Promise((resolve,reject)=>
//               {
//                   let lun = false;
//                   if(lun)
//                       resolve("had lunch")
//                   else 
//                       reject("did not have lunch")
//               })
//       }
//       function go()
//       {
//           return new Promise((resolve,reject)=>
//               {
//                   let going = true;
//                   if(going)
//                       resolve("went")
//                   else 
//                       reject("hostel")
//               })
//       } 
//     async function fullday()
//     {
//         try
//         {
//             let atten = await attendance();
//             console.log(atten)
//             let lunc = await lunch()
//             console.log(lunc)
//             let home = await go()
//             console.log(home)
//         }
//         catch(error)
//         {
//             console.error(error)
//         }
//     }
//     fullday()

function fun1(fun2,name){
    setTimeout(() =>{
        console.log(`file ${name} is in process`);
        console.log(`file ${name} got downloaded`);
        fun2();
    },2000)
    
}
function fun2(){
    console.log('download completed');
}
fun1(fun2,"abc");