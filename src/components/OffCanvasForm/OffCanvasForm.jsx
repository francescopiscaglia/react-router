import TitleInput from "./FormInput/TitleInput";
import ImageInput from "./FormInput/ImageInput";
import ContentInput from "./FormInput/ContentInput";
import CategoryInput from "./FormInput/CategoryInput";
import TagsInput from "./FormInput/TagsInput";
import Submit from "./FormInput/Submit";


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
                    <TitleInput formData={formData} handleFormField={handleFormField} />

                    {/* image */}
                    <ImageInput formData={formData} handleFormField={handleFormField} />

                    {/* content */}
                    <ContentInput formData={formData} handleFormField={handleFormField} />


                    {/* category */}
                    <CategoryInput formData={formData} handleFormField={handleFormField} />

                    {/* tags */}
                    <TagsInput avaibleTags={avaibleTags} handleCheckForm={handleCheckForm} checkedValue={checkedValue} />

                    {/* submit */}
                    <Submit />
                </form>
            </div>
        </>
    )
}