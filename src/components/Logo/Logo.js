import React from 'react';

import logoApp from '../../assets/img/mony-1.svg';
import './Logo.css';

const Logo = (props) => {
    return ( 
        <div className="logo">
 <img src={logoApp}  alt="logo"  />
        </div>
       
     );
}
 
export default Logo;