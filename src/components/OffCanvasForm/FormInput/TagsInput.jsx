export default function TagsInput({ avaibleTags, handleCheckForm, checkedValue }) {
    return (
        <>
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
        </>
    );
};