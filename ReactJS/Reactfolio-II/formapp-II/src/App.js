import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] =useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",comments:false, candidates:false, offers:false,
    pushNotification :""
  })

 function changeHandler(event){
const {name,value,checked,type}=event.target;
setFormData((prev) => ({...prev, [name]:type === "checkbox" ? checked:value})) 

}

function submitHandler(event){
  event.preventDefault();
  console.log("finally printing the value of form data")
}
  return (
<div className="flex flex-col items-center">
  <form onSubmit={submitHandler}>
  <label htmlFor="firstName">First Name</label>

  <br></br>
    <input
    type="text"
    name="firstName"
    id="firstName"
    placeholder="Akshit"
    value={FormData.firstName}
    onChange={changeHandler}
      className="outline"
    />

<br/>
<label htmlFor="lastName">Last Name</label>

<br></br>
  <input
  type="text"
  name="lastName"
  id="lastName"
  placeholder="Saxena"
  value={FormData.lastName}
  onChange={changeHandler}
    className="outline"
  />

<br/>
<label htmlFor="email">Email</label>

<br></br>
  <input
  type="email"
  name="email"
  id="email"
  placeholder="Email@email.com"
  value={FormData.email}
  onChange={changeHandler}
    className="outline"
  />
    <br/> 
    <label htmlFor="country">Country</label>
    <select
    id="country"
    name="country"
    value={formData.country}
    onChange={changeHandler}>
      <option>India</option>
      <option>UK</option>
      <option>US</option>
      <option>Canada</option>
    </select>

    <br/>
<label htmlFor="streetAddress">Street Address</label>

<br></br>
  <input
  type="text"
  name="streetAddress"
  id="streetAddress"
  placeholder="B-2C"
  value={FormData.streetAddress}
  onChange={changeHandler}
    className="outline"
  />

<br/>
<label htmlFor="city">City</label>

<br></br>
  <input
  type="text"
  name="city"
  id="city"
  placeholder="Mathura"
  value={FormData.city}
  onChange={changeHandler}
    className="outline"
  />

<br/>
<label htmlFor="state">State</label>

<br></br>
  <input
  type="text"
  name="state"
  id="state"
  placeholder="UP"
  value={FormData.state}
  onChange={changeHandler}
    className="outline"
  />

<br/>
<label htmlFor="postacode">Postal Code</label>

<br></br>
  <input
  type="text"
  name="postalcode"
  id="postalcode"
  placeholder="23923*"
  value={FormData.postalCode}
  onChange={changeHandler}
    className="outline"
  />

<br/> <br/>
  <fieldset>
    <legend>By Email</legend>

    <div className="flex flex-row">
    <input
    id="comments"
    name="comments"
    type="checkbox"
    checked={formData.comments}
    onChange={changeHandler}
    />
    <div>
      <label htmlFor="comments">Comments</label>
      <p>Get notified when someones posts a comment on a posting.</p>
    </div>

    </div>

    <div className="flex flex-row">
    <input
    id="candidates"
    name="candidates"
    type="checkbox"
    checked={formData.comments}
    onChange={changeHandler}
    />
    <div>
      <label htmlFor="candidates">Candidates</label>
      <p>Get notified when a candidate applies for a job.</p>
    </div>

    </div>

    <div className="flex flex-row">
    <input
    id="offers"
    name="offers"
    type="checkbox"
    checked={formData.offers}
    onChange={changeHandler}
    />
    <div>
      <label htmlFor="offers">Offers</label>
      <p>Get notified when a candidate applies or reject an offer.</p>
    </div>

    </div>
    

  </fieldset>

<br/> <br/>
  <fieldset>
    <legend>Push Notification</legend>
    <p>These are delivered vias SMS to your mobile phone.</p>

    <input
    type="radio"
    id="pushEverything"
    name="pushNotifiction"
    value="Everything"
    onChange={changeHandler}
    />


    <label htmlFor="pushEverything">Everything</label>

    <br/>
    <input
    type="radio"
    id="pushEmail"
    name="pushNotifiction"
    value="Same as email"
    onChange={changeHandler}
    />

    <label htmlFor="pushEmail">Same as email</label>

    <br/>
    <input
    type="radio"
    id="pushNothing"
    name="pushNotifiction"
    value="No Push Notifications"
    onChange={changeHandler}
    />

    <label htmlFor="pushNothing">No Push Notifiactions</label>


  </fieldset>


  <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
  Save</button>
  </form>
</div>
  );
}

export default App;
