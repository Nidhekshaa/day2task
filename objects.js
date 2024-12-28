/*let student={
    name : ['abi','nidhi'],
    age : 20,
    isStudent : true,
    address : {
        state : "tamilnadu",
        city : "erode"
    },
    hello : function() {
        console.log("Hello");
    }
}
console.log(student.name[1]);
console.log(student.age);
student.hello();
console.log(student.address.state);*/

let student = new Object();
student.name="nidhi";
student.age=20;
student.fun=function(){
    console.log("Welcome")
}
console.log(student);
student.fun();