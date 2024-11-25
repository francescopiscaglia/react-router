export default function ImageInput({ formData, handleFormField }) {
    return (
        <>
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
        </>
    );
};