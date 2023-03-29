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

}

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
        console.loglog('drawing');
    }
}


//creating the object
let rectangleObject3=new RectangleCre(4,6);














