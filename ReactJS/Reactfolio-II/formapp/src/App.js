import './App.css';
import {useState} from "react";

function App() {

// const[firstName, setFirstName]=useState("");
// const[lastName, setLastName]= useState("");




//   function changeFirstHandler(event){
//     // console.log("printing first name");
//     // console.log(event.target.value);

//     setFirstName(event.target.value);
    
//   }

//   function changeLastHandler(event){
//     // console.log("printing last name");
//     // console.log(event.target.value);

//     setLastName(event.target.value);
//   }
const [formData, setFormData] = useState({firstname: "", lastname: "", email:"", comments:"",isVisible:true, mode:""});

 function changeHandler(event){
  const {name, value, checked, type}= event.target
  setFormData(prevFormData =>{

    return {
      ...prevFormData,
      [name]: type ==="checkbox" ? checked :value
    }
  });
 }

 function submitHandler(event){
  event.preventDefault();
  console.log("Finally printing")
  console.log(formData);
 }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <input 
        type='text'
        placeholder='first name'
        name='firstname'
          onChange={changeHandler}
          value={formData.firstName}
        />
        
        <br></br>
        <input 
        type='text'
        placeholder='last name'
        name='lastname'
          onChange={changeHandler}
          value={formData.lastName }
        />
 
 <br></br>
        <input 
        type='email'
        placeholder='Enter your email here'
        name='email'
        value={formData.email}
          onChange={changeHandler}
        />
 
 <br>
 </br>

 <textarea
 placeholder='enter your comments'
 onChange={changeHandler}
 name='comments'
 value={formData.comments}
 />

<br></br>
<input
type='checkbox'
onChange={changeHandler}
name='isVisible'
id='isVisible'
checked={formData.isVisible}
/>

<label htmlFor='isVisible'>Am I visible ?</label>

<fieldset>
  <legend>Mode:</legend>
  <input
type='radio'
onChange={changeHandler}
name='mode'
value ="Online-Mode"
id="Online-Mode"
/>

<label htmlFor='Online-mode'>Online Mode</label>

<input
type='radio'
onChange={changeHandler}
name='mode'
value ="Offline-Mode"
id="Offline-Mode"
/>

<label htmlFor='Offline-mode'>Online Mode</label>
</fieldset>

<select
name='favCar'
id='favCar'
value={formData.favCar}
onChange={changeHandler}
>
  <option value="scarpio">Scarpio1</option>
  <option value="scarpio">Scarpio2</option>
  <option value="scarpio">Scarpio5</option>
  <option value="scarpio">Scarpio7</option>
  <option value="scarpio">Scarpio8</option>
  <option value="scarpio">Scarpio9</option>
</select>

<button>Submit</button>
      </form>
    </div>
  );
}

export default App;
