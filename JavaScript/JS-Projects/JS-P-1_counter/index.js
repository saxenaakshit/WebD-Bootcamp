const countValue= document.querySelector('#counter');

const increment= ()=>{

    //get value from ui
    let value=parseInt(countValue.innerText);
    //Update the value
    value=value+1;
    //set value onto UI
    countValue.innerText=value; 
};

const decrement=()=>{
    //get value from ui
    let value=parseInt(countValue.innerText);
    //Update the value
    value=value-1;
    //set value onto UI
    countValue.innerText=value; 
}