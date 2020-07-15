import React from 'react';
import Logo from './Logo/Logo';


const Header = (props) => {
    return ( 
        <>
            <nav className="flex justify-center p-4 bg-teal-400">
           
                    <Logo />
              
            </nav>
        </>
     );
}
 
export default Header;