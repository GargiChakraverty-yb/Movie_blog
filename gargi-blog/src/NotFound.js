import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notfound ">
            <h4>Page not found</h4>
            <Link to="/">Go back to HomePage...</Link>
        </div>

    );
}

export default NotFound;