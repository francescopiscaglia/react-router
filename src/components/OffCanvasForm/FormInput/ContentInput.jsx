export default function ContentInput({ formData, handleFormField }) {
    return (
        <>
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
        </>
    )
}