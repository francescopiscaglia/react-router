export default function TitleInput({ formData, handleFormField }) {
    return (
        <>
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
        </>
    );
}; 