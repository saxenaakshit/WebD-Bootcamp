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
const [formData, setFormData] = useState({firstName: "", lastName: "", email:"", comments:"",isVisible:true});

 function changeHandler(event){
  setFormData(prevFormData =>{
    return {
      ...prevFormData,
      [event.target.name]:event.target.value
    }
  });
 }
  return (
    <div className="App">
      <form>

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

      </form>
    </div>
  );
}

export default App;
