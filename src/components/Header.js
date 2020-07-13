import React from 'react';
import Logo from './Logo/Logo';


const Header = (props) => {
    return ( 
        <>
            <nav className="flex justify-center p-4 bg-teal-400">
                <div className="" >
                    <Logo />
                    </div>
            </nav>
        </>
     );
}
 
export default Header;