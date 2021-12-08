import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

function UglyForm() {
    const {handleChange, handleSubmit, data} = useContext(ThemeContext)
    const {title, imgUrl, description} = data
    
    return(
        <div className="form-container">
            <form>
                <input
                    name="title"
                    value={title}
                    placeholder="Title"
                    onChange={handleChange}
                ></input>
                <input
                    name="imgUrl"
                    value={imgUrl}
                    placeholder="Img URL"
                    onChange={handleChange}
                ></input>
                <input
                    name="description"
                    value={description}
                    placeholder="Description"
                    onChange={handleChange}
                ></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UglyForm