import React from 'react'
import '../component-css/LoginHero.css';
import LoginHero from '../components/LoginHero';
import '../pages-css/LoginPage.css';

function LoginPage() {
    return(
        <div className="mainSection">
             <LoginHero />
        </div>
       
        
    );  
}

export default LoginPage;