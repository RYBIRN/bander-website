import React from 'react'
import '../component-css/LoginHero.css';


function LoginHero() {
    return(
        
        <div className="hero-container">
            {/* <video src="" autoPlay loop muted />  */}
            <div className="hero-img"></div> 
            <div className="overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="66 0,100 0,100 100, 25 100"/>
            </svg>    
            </div>   
              
             
        </div>
        
        
    );
}

export default LoginHero;