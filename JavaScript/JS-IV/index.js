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

 //rest operator

 function sum2(num,...args){//always written as a last parameter
console.log(args);
 }

 sum2(4,1,2,3,4,45);

 //default parameters -> make parameters of your choice optional

 function intrest(p,r,w=900){//-> should be at corners and can be done by a hack by making the variable you dont wanna use undefined
    ans=p*r*w/100;
    console.log(ans);
 }


 intrest(100,100);

//getter & setter

//getter-> to access properties
//setter-> change or mutate properties
let person={
    fName:'Akshit',
    lName:'Saxena'
};

function fullName(){
    return `${person.fName} ${person.lName}`;
}

console.log(fullName());

 
//applying getter setter->

let person1={
    fName:'Akshit',
    lName:'Saxena',
    get fullName(){
        return `${person1.fName} ${person1.lName}`;
    },
set fullName(value){
    if(typeof value!=='string'){
        throw new Error('You have not sent a string');
    }
let parts=value.split(' ');
this.fName=parts[0];
this.lName=parts[1];
},


};

//try and catch block
try{
    person.fullName=true;

}
catch(e){
    alert(e);
}
console.log(person1.fullName);
person1.fullName="Prayas Gautam";
console.log(person1.fullName);

//scope of var and let is different 

// var is valid throughout the program but let keyword valid only inside the nearest code block

let arr3=[1,2,3,4];

// let total=0;

// for(let value of arr3)
// total=total+value;


// console.log(total);

let totSum=arr3.reduce((accumulator,currentValue)=> accumulator+currentValue,0);

console.log(totSum);
