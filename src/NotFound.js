import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry!</h1>
            <h3>The page you're looking for does not exist (yet).</h3>
            <Link to='/' className="default-link">Teleport to homepage..</Link>
        </div>
    );
}
 
export default NotFound;