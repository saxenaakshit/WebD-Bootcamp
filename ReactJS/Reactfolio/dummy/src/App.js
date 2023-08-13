
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const[text,setText]=useState('');

// variation 1 --> Every render
// useEffect( ()=> {
// console.log("UI RENDER DONE");});

// variation2 ->First Render
// useEffect( ()=> {
//   console.log("UI RENDERING DONE");
// }, []);

// variation3 ->First Render+ Whenever dependency changes
// useEffect( ()=> {
//   console.log("Change observed");
// }, [text]);
 
//variation-4 -> to handle unmounting of component
useEffect( ()=> {
  //add event listener
  console.log("Listener added");

  //it will execute first
  return() => {
    console.log("Listener removed");
  }
});


  function changeHandler(event){
    console.log(text);
    setText(event.target.value)
  }
  return (
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
