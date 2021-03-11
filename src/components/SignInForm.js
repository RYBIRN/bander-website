import React from 'react'
import "../component-css/SignInForm.css";
import {Link} from 'react-router-dom';

function SignInForm() {
    return(
        <form className="form">
            <h1>Bander</h1>
            <div className="form-inputs">
                <input
                 type="text" 
                 name="username" 
                 className='form-input'
                 placeholder="Email or Phone Number"
                 />    

                <input
                 type="password" 
                 name="password" 
                 className='form-input'
                 placeholder="Password"
                 />   
            </div>
            <div class='form-buttons'>
                 <button class='login-button'>Log In</button>
                 <a class='forgot-password' href=''>Forgot Password?</a>
                 <div className="seperator"></div>
                 <button class='create-account'>Create Account</button>
            </div>
            
        </form>
    );
}

export default SignInForm;