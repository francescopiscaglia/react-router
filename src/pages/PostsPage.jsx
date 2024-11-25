import { useState, useEffect } from "react";
import OffCanvasForm from "../components/OffCanvasForm/OffCanvasForm";

// i dati iniziali del formo
const initialFormData = {
    title: "",
    image: "",
    content: "",
    slug: "",
    tags: [],
    isPublished: true,
};



// API
const apiUrl = "http://localhost:3001";
const endpointApi = "/posts";


export default function PostsPage() {
    const [formData, setFormData] = useState(initialFormData);

    // logic
    const [posts, setPosts] = useState([]);
    const [checkedValue, setCheckedValue] = useState([]);


    // useEffect per eseguire il fetch dei dati quando il componente viene montato
    useEffect(() => fetchData(apiUrl, endpointApi), []);


    // fetch 
    function fetchData(url, endpoint) {
        fetch(`${url}${endpoint}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data.data) // Aggiorna lo stato con i dati ottenuti dalla chiamata API
            })
            .catch(error => console.error('Errore durante il fetch dei dati:', error));
    };


    // handle input change
    function handleFormField(e) {

        // aggiorno lo stato con il nuovo valore dell'input
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    // handle checkbox change
    function handleCheckForm(e) {
        const { checked, value } = e.target;

        setCheckedValue(prev => {
            if (checked) {
                // Se il tag è selezionato, aggiungilo a `checkedValue`
                return [...prev, value];
            } else {
                // Se il tag è deselezionato, rimuovilo da `checkedValue`
                return prev.filter(tag => tag !== value);
            }
        });
    };


    // delete a post
    function handleDeleteClick(e) {

        // seleziono il giusto post tramite slug
        const deleteTitle = String(e.target.closest("button").getAttribute("data-index"));

        // aggiorno lo state facendo la chiamata AJAX
        fetch(`${apiUrl}${endpointApi}/${deleteTitle}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response.data);
                const newPosts = response.data;

                setPosts(newPosts)
            })
    };

    // handle form submit
    function handleFormSubmit(e) {
        e.preventDefault();

        // Creo un nuovo oggetto con un nuovo id e i dati del form
        const newItem = {
            id: Date.now(),
            ...formData,
            tags: checkedValue, // Aggiungo i tag selezionati
        };

        // Aggiorno l'array dei post con il nuovo oggetto
        setPosts([newItem, ...posts]);

        // Resetto il form e i tag selezionati
        setFormData(initialFormData);
        setCheckedValue([]); // Resetta lo stato dei tag selezionati

        // invio i dati al server
        fetch(`${apiUrl}${endpointApi}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // specifico che il corpo della richiesta è in formato JSON
            },
            body: JSON.stringify(newItem) // converto l'oggetto in una stringa JSON
        })
    };



    return (
        <main>
            <div className="container">

                <button className="btn btn-outline-secondary btn-sm my-3" type="button" popovertarget="off-canvas-form">
                    Add post
                </button>

                <OffCanvasForm handleFormSubmit={handleFormSubmit} formData={formData} handleFormField={handleFormField} handleCheckForm={handleCheckForm} checkedValue={checkedValue} />






                {/* posts */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-xlg-3 g-4">

                    {posts ?
                        posts.map(post => {
                            return (
                                <div className="col" key={post.id}>

                                    <div className="card rounded-3" style={{ minHeight: "450px" }}>
                                        <img
                                            src={post.image.startsWith("http") ? post.image : `${apiUrl}${post.image}`} //se l'url inizia con http non aggiungere nulla, altrimenti aggiungi l'url dell'api
                                            alt=""
                                            className='card-img-top'
                                        />

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
            </div>
        </main>
    )
}