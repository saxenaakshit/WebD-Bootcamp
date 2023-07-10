//math method
console.log(Math.PI);
console.log(Math.random());
console.log(Math.max(1,2,3,4));
console.log(Math.min(1,2,3,4));
console.log(Math.abs(-2));
console.log(Math.round(3.4));

//string method

let firstName='akshit';
let lastName=new String('saxena');

let Test=new String('guchi    ')
console.log(lastName[2]);

console.log(firstName.length);

Test.trim;
console.log(Test);
let rep=firstName.toUpperCase();
console.log(rep);
let ans=firstName.replace('akshit','car');
console.log(ans);



//Template literal
let msg=`Hello there

it will print as it is as you write

Thankyou so much!!`

console.log(msg);

let repo='Hello';

let msg1=` her it will replace whatever will be written

in a dollar sign enclosed in a curly brace ${repo}`

console.log(msg1);


//date
let date=new Date();
console.log(date);

let date1=new Date('28 July 2003 12:00');
console.log(date1);
//can also be set using getter and setter