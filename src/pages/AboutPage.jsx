import Jumbotron from "../components/Jumbotron/Jumbotron";

export default function AboutPage() {

    const pageDescription = "Hi! 👋🏼 My name is Francesco Piscaglia, I'm a 24 years old student from Italy. I'm currently studying Web Delevopment at Boolean Careers, a coding school based in Milan, Italy. I'm a passionate developer, I love to learn new technologies and to apply them to real world projects. I'm also a big fan of music, I play the guitar and the piano. I'm a big fan of music, I love to listen to it and to discover new artists. I'm also a big fan of sports, I play football and I love to watch Formula 1 races.";

    return (
        <>
            <Jumbotron pageTitle={"Francesco Piscaglia"} pageDescription={pageDescription} />
        </>
    );
};