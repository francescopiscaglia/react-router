import { useState, useEffect } from 'react'
import './App.css'

// i dati iniziali del formo
const initialFormData = {
  title: "",
  image: "",
  content: "",
  slug: "",
  tags: [],
  isPublished: true,
};

// i tag disponibili
const avaibleTags = ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno", "Antipasti", "Primi piatti", "Ricette veloci"]

// API
const apiUrl = "http://localhost:3001";
const endpointApi = "/posts";


function App() {

  // logic
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
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



  // render
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          <h1>Form</h1>

          <button className="btn btn-primary btn-lg my-3" type="button" popovertarget="off-canvas-form">
            Add
          </button>
        </div>


        {/* Off-canvas form */}
        <div id="off-canvas-form" popover="true" className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Add a new post</h3>
            <button className="btn btn-dark" type="button" popovertarget="off-canvas-form" popovertargetaction="hide">
              Close
            </button>
          </div>
          <p>Use the form below to add a new post to the blog</p>


          {/* form here */}
          <form onSubmit={handleFormSubmit}>

            {/* title */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                aria-describedby="titleHelpers"
                placeholder="Dolce fatto in casa"
                value={formData.title}
                onChange={handleFormField}
                required
              />
              <small id="titleHelper" className="form-text text-muted">Type the title of your post</small>
            </div>

            {/* image */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                aria-describedby="imageHelpers"
                placeholder="https://picsum.photos/600/400"
                value={formData.image}
                onChange={handleFormField}
                required
              />
              <small id="imageHelper" className="form-text text-muted">Add the image of your post</small>
            </div>

            {/* content */}
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                type="text"
                className="form-control"
                name="content"
                id="content"
                aria-describedby="contentHelpers"
                placeholder="Add your post content"
                value={formData.content}
                onChange={handleFormField}
              />
              <small id="imageHelper" className="form-text text-muted">Add the content of your post</small>
            </div>

            {/* category */}
            <div className="mb-3">
              <label htmlFor="slug" className="form-label">Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="slug"
                id="slug"
                placeholder="Select a category"
                value={formData.slug}
                onChange={handleFormField}
              >
                <option value="">Select a category</option>
                <option value="Dolci" >Dolci</option>
                <option value="Torte" >Torte</option>
                <option value="Ricette vegetariane" >Ricette vegetariane</option>
                <option value="Ricette al forno" >Ricette al forno</option>
                <option value="Antipasti" >Antipasti</option>
                <option value="Primi piatti" >Primi piatti</option>
                <option value="Ricette veloci" >Ricette veloci</option>
              </select>
              <small id="imageHelper" className="form-text text-muted">Select the category</small>
            </div>

            {/* tags */}
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">Tags</label>

              {avaibleTags.map((tag, index) => {
                return (

                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={tag}
                      id=""
                      name='tags'
                      onChange={handleCheckForm}
                      checked={checkedValue.includes(tag)} // controlla se il tag è presente nell'array checkedValue
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      {tag}
                    </label>
                  </div>
                )
              })}
            </div>

            {/* submit */}
            <button
              type="submit"
              className="btn btn-dark mt-4"
            >
              Save
            </button>
          </form>
        </div>



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
    </>
  );
};

export default App