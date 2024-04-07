import React from "react";
import {NavLink} from 'react-router-dom';

const Welcome = ()=>{
    return(
        <>
        <div className="container">
            <div className="welc">
                <h2>Welcome to popX</h2>
                <p>Lorem, ipsum dolor sit amet facilis quaerat minima <br />odio velit reiciendis!</p>                
                    <NavLink to="/signup"><button className="buttt1">Create Account</button></NavLink>
                    <NavLink to="/login"><button className="buttt2">Already Registered?Login</button>  </NavLink>            
            </div>
        </div>
        </>
        

    )
 }
export default Welcome