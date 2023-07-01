import React from 'react';
import './Welcome.css';
import welcomeimage from '../../images/welcomeimage.jpeg';

const Welcome = () => {
    return (<div className='main__welcome'>
        
    
        <img className='main_welcome_image' src={welcomeimage} alt="alt" />
  
        <div className='main_welcome_info'>

            <span className="main_welcome_info__title">
                EMPOWERING TODAY'S YOUTH
            </span>
        </div>


    </div>);
}

export default Welcome;