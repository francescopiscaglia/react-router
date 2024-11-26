import { Link } from "react-router-dom";

export default function PostsList({ posts, apiUrl, handleDeleteClick }) {
    return (
        <>
            {/* posts */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-xlg-3 g-4">

                {posts ?
                    posts.map(post => {
                        return (
                            <div className="col" key={post.id}>

                                <div className="card rounded-3" style={{ minHeight: "450px" }}>

                                    <Link to={`/posts/${post.slug}`}>
                                        <img
                                            src={post.image.startsWith("http") ? post.image : `${apiUrl}${post.image}`} //se l'url inizia con http non aggiungere nulla, altrimenti aggiungi l'url dell'api
                                            alt=""
                                            className='card-img-top'
                                        />
                                    </Link>

                                    <div className="card-body">

                                        {/* title */}
                                        <h4 className='card-title'>{post.title}</h4>
                                        {/* content */}
                                        <p className='card-text'>{post.content}.</p>
                                        {/* category */}
                                        <p className='card-subtitle mb-2 text-body-secondary'>{post.slug.charAt(0).toUpperCase() + post.slug.slice(1)}</p>

                                        {/* tags */}
                                        {post.tags.map((tag, index) => {
                                            return (
                                                <a
                                                    key={index}
                                                    href=''
                                                    className='card-link me-2'
                                                >{tag}</a>
                                            )
                                        })}

                                        {/* button */}
                                        <div className="call-to-action my-2">
                                            <button
                                                className='btn btn-outline-danger'
                                                onClick={handleDeleteClick}
                                                data-index={post.title}
                                            ><i className="bi bi-trash3"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :

                    <p>Data non avaible</p>
                }
            </div>
        </>
    );
};