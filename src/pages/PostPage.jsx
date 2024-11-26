import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PostPage() {
    const [post, setPost] = useState({});
    const { slug } = useParams();
    const navigate = useNavigate();
    const url = `http://localhost:3001/posts/${slug}`;

    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(results => {
                    const keys = Object.keys(results) // ["error"]

                    // se la risposta contiene la chiave "error" navigo alla rotta *
                    if (keys.includes("error")) {
                        navigate("*")

                        // altrimenti setto lo stato con i dati del post
                    } else {
                        setPost(results.data)
                    }
                })
                .catch(error => console.error(error))
        }, []
    );


    return (
        <>
            <div className="container" style={{ width: "600px" }}>
                <div className="row my-2">
                    <div className="col">
                        <div className="card my-4 d-flex">

                            {post?.image ? // se lo stato contiene l'immagine del post la mostro
                                (<img
                                    src={`http://localhost:3001${post.image}`}
                                    alt=""
                                    className="card-img-top"
                                />

                                ) : ( // altrimenti mostro un testo di caricamento
                                    <p>Loading...</p>
                                )
                            }

                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};