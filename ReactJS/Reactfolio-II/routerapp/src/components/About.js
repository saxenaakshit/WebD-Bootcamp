import React from "react";
import { useNavigate } from "react-router-dom";

const About=() => {
    const navigate = useNavigate();
    function backHandler(){
        navigate(-1);
    }
    return(
        <div>
            This is About

            <button onClick={backHandler}>Go back</button>
        </div>
    )
}

export default About;