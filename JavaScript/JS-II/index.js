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
    let rectangle ={
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
 




