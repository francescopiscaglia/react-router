import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome to my amazing blog 👋🏼</h1>
                    <p className="col-md-8 fs-4">
                        Enjoy
                    </p>

                    <Link to={"/posts"} className="btn btn-primary">
                        See my post
                    </Link>
                </div>
            </div>

        </>

    );
};