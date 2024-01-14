import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Create', href: '/create' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className="nav">

            <button className="mobile-nav-toggle"
                aria-controls='primary-navigation' aria-expanded={isExpanded}
                onClick={() => setExpanded(!isExpanded)}>
                
                <span className='sr-only'>Menu</span>
            </button>


            <nav className="primary-navigation" data-visible={isExpanded}>
                <ul className="flex">
                    
                    { navigation.map(item => (
                        <li key={item.name}>
                            <NavLink to={item.href} >
                                {item.name}
                            </NavLink>
                        </li>
                    )) }

                </ul>
            </nav>

        </div>
    );
}
 
export default Navbar;