import React from "react";
import { useNavigate } from "react-router-dom";

const Labs=() => {
    const navigate1= useNavigate();

    function clickHandler(){
        navigate1("/about");
    }
    return(
        <div>

<div>
            This is Labs

            
        </div>

        
            <button onClick={clickHandler}> Move to About page</button>
        
        </div>
        

        
    )
}

export default Labs;