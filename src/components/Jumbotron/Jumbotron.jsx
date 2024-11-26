import { Link } from "react-router-dom";

export default function Jumbotron({ pageTitle, pageDescription, children }) {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{pageTitle}</h1>
                <p className="col-md-8 fs-4">
                    {pageDescription}
                </p>

                {children}
            </div>
        </div>
    );
};