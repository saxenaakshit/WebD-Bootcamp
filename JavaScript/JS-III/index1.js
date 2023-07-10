let numbers=[1,2,3,4];
console.log(numbers);
//insert

//end
numbers.push(5);
console.log(numbers);

//begin
numbers.unshift(0);
console.log(numbers);

//middle->index,to remove,what to add
numbers.splice(2,0,'a','b');
console.log(numbers);


//finding the index 2
console.log('finding the index of 4');
console.log(numbers.indexOf(4));

//finding if the number is present or not
console.log('finding if 02 is present or not')
console.log(numbers.includes(-2));


let courses=[{
    no:1,
    name:'akshit'},
{
no:2,
name:'love'
}];

//includes and indexof will not work here
//to solve this problem predicate function/callback function came to existence

// let course=courses.find(function (course){
//     return course.name==='akshit'
// });

//shorthand

let course=courses.find(course => course.name=='akshit');
console.log(course);

let empo=[1,2,3,4,4];
let empo1=empo;
//array can be empty by using these ways->

//a. make empo.length=0
//b. empo.splice(0,empo.length);

empo.length=0;
console.log(empo);
console.log(empo1);

let empo2=[1,2,3,4,4];
let empo3=empo;

empo2.splice(0,empo2.length);
console.log(empo2);
console.log(empo3);


//combinig two array

let first=[1,2,3,4];
let second=[5,6,7,8];

let combo=first.concat(second);
console.log(combo);

//slicing the array->first index is included while end index is excluded
let slice=[1,2,3,4,5,6,7,8];

let sliced=slice.slice(2,4);
console.log(sliced);
console.log(slice);