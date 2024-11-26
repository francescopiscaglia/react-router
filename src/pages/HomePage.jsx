import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Jumbotron pageTitle={"Welcome to my amazing blog 👋🏼"} pageDescription={"Enjoy!"}>
                <Link to={"/posts"} className="btn btn-primary">
                    See my post
                </Link>
            </Jumbotron>
        </>
    );
};