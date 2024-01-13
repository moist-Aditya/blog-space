import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>

        </div>
    );
}
 
export default Navbar;