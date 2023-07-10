//combining and making a copy uing spread operator(...)

let first=[1,2,3,4];
let second=[5,6,7,8];

let combo=[...first,...second];
//or anything can be inserted in between
//[...first,false,...second,true];

//creating copy with spread operator
let combo2=[...combo];

console.log(combo);
console.log(combo2);

//iterating in arrays
let iter=[5,6,7,8,9,10];

//for of loop
for(let vari of iter){
    console.log(vari);
}

let iter2=[5,6,7,8,9,10];


//for each loop 
iter2.forEach(function(num){
console.log(num);
});

//join & split
let join=[1,2,3,4,5,5,6];

let joined=join.join(',');

console.log(joined);


//sorting & reverse

//sorted according to string values
let ap=[10,40,23,9];
let sorted=ap.sort();
console.log(sorted);


let re=ap.reverse();
console.log(re);



//filtering

let filter=[-4,-2,12,15,18,10];

let filtered=filter.filter(function(num){
    return num>=0;
});

console.log(filtered);


//mappingn in arrays
let numbers=[7,8,9,10];
console.log(numbers);

let items=numbers.map(value=> 'student_no'+value);
console.log(items);