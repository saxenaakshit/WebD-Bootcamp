console.log("hello jee kese ho saare");


//creating object
//{}=object literal
let rectangle ={

length:4,
breadth: 5,

//creating function
draw: function(){
 console.log("function is called")
}

};

//1.factory function-->camelCaseNotation
function createRectangle(){
    let rectangle ={
        length:4,
        breadth: 5,
        
        //creating function
        draw: function(){
         console.log("function is called");
        }
        };
}

//storing the created object into a variable
let rectangeObj1=createRectangle();
 

//creating with custom values
function createRectangle(length,breadth){
    return rectangle ={
        length:length, //or just length
        breadth: breadth, //or just breadth
        
        //creating function
        draw: function(){
         console.log("function is called");
        }
        };
}

let rectangleObj2=createRectangle(5,4);



//2.Constructor function-->PascalNotation
//constructor function initalize or define the properties and methods
function RectangleCre(len,bre){

    this.length=len;
    this.breadth=bre;

    this.draw=function(){
        console.log('drawing');
    }
}


//creating the object
let rectangleObject3=new RectangleCre(4,6);


//dynamic nature of the variables
//if you have forgotten creating an property you can add it later also
RectangleCre.color='blue';

delete RectangleCre.color;



//there ar two types of datatypes in JS

//primitives or value types ->numbers,strings,boolean,undefined,null

//reference types or objects --> functions,obejcts,array


//in primitives(cppy is created)
let a=10;
let b=a;

a++;

//a--> 11
//b--> 10

//in reference(address is passed)
let c={value: 10};
let d=c.value;

c.value++;

//c.value --> 11
//d.value --> 11


let square={
    side:5,
    side2:7
};


//for-in loop
for(let key in square){
    //keys are reflected through key variable
    console.log(key);
     //values are reflected through square[key]
     console.log(square[key])
}

//for-of loop
for(let key of Object.entries(rectangle)){//or Object.keys
    console.log(key)
}










 














