import { useState, useEffect } from "react";
import OffCanvasForm from "../components/OffCanvasForm/OffCanvasForm";
import PostsList from "../components/Posts/PostsList";

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

    // logic
    const [formData, setFormData] = useState(initialFormData);
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


    // render
    return (
        <main>
            <div className="container">

                <button className="btn btn-outline-secondary btn-sm my-3" type="button" popovertarget="off-canvas-form">
                    Add post
                </button>

                <OffCanvasForm handleFormSubmit={handleFormSubmit} formData={formData} handleFormField={handleFormField} handleCheckForm={handleCheckForm} checkedValue={checkedValue} />


                <PostsList posts={posts} apiUrl={apiUrl} handleDeleteClick={handleDeleteClick} />
            </div>
        </main>
    );
};