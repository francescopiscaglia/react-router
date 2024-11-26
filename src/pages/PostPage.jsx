import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const [post, setPost] = useState();
    const { slug } = useParams()
    const url = `http://localhost:3001/posts/${slug}`;

    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(results => {
                    console.log(results.data);

                }
                )
        }, []
    )

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">

                        {/* <img src={`http://localhost:3001/${post.image}`} alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    );
};