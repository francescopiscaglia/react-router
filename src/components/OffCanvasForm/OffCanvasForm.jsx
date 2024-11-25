export default function OffCanvasForm({ handleFormSubmit, formData, handleFormField, handleCheckForm, checkedValue }) {
    // logic

    // i tag disponibili
    const avaibleTags = ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno", "Antipasti", "Primi piatti", "Ricette veloci", "Tradizionale"];


    // render
    return (
        <>
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
        </>
    )
}