import React from 'react'

import '../pages-css/LoginPage.css';

import LoginHero from '../components/LoginHero';
import SignInForm from '../components/SignInForm'

function LoginPage() {
    return(
        <div className="mainSection">
             <LoginHero />  
             <SignInForm />
        </div>
       
        
    );  
}

export default LoginPage;