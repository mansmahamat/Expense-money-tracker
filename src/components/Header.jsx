import React from 'react';
import Logo from './Logo/Logo';


const Header = (props) => {
    return ( 
        <>
            <nav className="flex justify-center p-4 bg-transparent">
           
                    <Logo />
              
            </nav>
        </>
     );
}
 
export default Header;