// console.log('Chaliye shuru krte hain');

// //object create
// let rectangle={
//     length:1,
//     breadth:2,

//     draw: function(){//known as method
//         console.log('draw');
//     }
// };

// //object can be created in two ways- factory function and constructor function

// //factory function->camel Case notation
// function createRectangle(){
 
// return rectangle={
//     length:1,
//     breadth:2,

//     draw(){//known as method
//         console.log('draw');
//     }
// };
// }

// function createRectangle1(len,bre){
//     return rectangle={
//         length:len,
//         breadth:bre,

//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }

// let a= createRectangle();
// let b=createRectangle1(3,4);

// console.log(b.length);
// console.log(b.draw());

//can be accessed using a.length(),a.breadth() etc.


//constructor function->Pascal Notation
// function Rectangle(){//parameters can also be passed

//     this.length=1;
//     this.breadth=4;
//     this.draw=function draw(){
//         console.log('drawing');
//     }

// }

// //creeating the obj;

// let ob=new Rectangle();
// ob.color='pink';
// console.log(ob);

// delete ob.color;
// console.log(ob);

//example of primitives
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);


//example of refrence type
// let a={value:10};
// let b=a;
// a.value++;
// console.log(a);
// console.log(b);

let rectangle ={
    length:45,
    breadth:56
}

for(let key in rectangle){
    console.log(key,rectangle[key]);
}

for( let key of Object.entries(rectangle)){
    console.log(key);
}

//check if a property is present in the object

if('length' in rectangle){
    console.log('yess present');
}
else{
    console.log('Not present');
}

let src={
    a:45,
    b:56,
    c:67
};
let dest={

};


// object cloning
//way-1 to clone(iteration)

// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);

//way-2 to clone(assign)
// dest=Object.assign({},src);
// console.log(dest);

//way-3 to assign
dest={...src};
console.log(dest);
