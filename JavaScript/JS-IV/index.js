//run can be called up here also and to it came to possibility becaise a concept called:-
//hoisting-> the process of moving function declaration to top of the file and it is done automatically by JS Engine.


function run(){
    console.log('running');
}

//invoking or calling the function
run();


//function assignment

//1. Named function assignment

let stand=function walk(){
    console.log('walking');
}
 stand();

 let jump=stand;


 //2. Anonymus function assignment

 let stand2= function (){
console.log('still walking');
 }

 stand2();


 //arguments function
 function sum(a,b){
    let total=0;

    for(let value of arguments)
    total+=value;

    return total;
 }

  

 console.log(sum(1,2,3,4,5));