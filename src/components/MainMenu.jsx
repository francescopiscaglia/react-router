export default function () {
    return (
        <nav className="navbar navbar-expand-lg bg-primary w-100" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand">My Blog</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/posts">Posts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};