import { useState } from "react";

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
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Categories</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>

        </div>
    );
}
 
export default Navbar;