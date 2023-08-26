import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useState} from "react";
import {toast} from "react-hot-toast";
import useNavigate from "react";

const SignupForm = (setIsLoggedIn) => {

    const navigate = useNavigate();


    const [formData, setFormData]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:""
    })

    const [showPassword, setShowPassword]= useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard")
    }



  return (
    <div>
        <div>
            <button>
                student
            </button>

            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        <div>          
                  <label>
                <p>First Name<sup>*</sup></p>
                <input
                    required
                    type='text'
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formData.firstName}
                />
            </label>

            <label>
                <p>Last Name<sup>*</sup></p>
                <input
                    required
                    type='text'
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Lastt Name'
                    value={formData.lastName}
                />
            </label>
            </div>

            <label>
                <p>Email Addresss<sup>*</sup></p>
                <input
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    value={formData.email}
                />
            </label>

            <div>
            <label>
                <p>Create Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={formData.password}
                />

                 <span onClick={()=> setShowPassword((prev) => !prev)}>
                 {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)};
                 </span>
            </label>

            <label>
                <p>Confirm Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={formData.confirmPassword}
                />

                <span onClick={()=> setShowPassword((prev) => !prev)}>
                 {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)};
                 </span>
            </label>
            </div>
            <button>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm