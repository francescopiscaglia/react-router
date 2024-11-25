export default function CategoryInput({ formData, handleFormField }) {
    return (
        <>
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
        </>
    );
};