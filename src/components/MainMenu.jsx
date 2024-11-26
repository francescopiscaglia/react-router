import { NavLink } from "react-router-dom";

export default function () {
    return (
        <nav className="navbar navbar-expand-lg bg-primary w-100" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand">My Blog</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/posts" className="nav-link" >Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};