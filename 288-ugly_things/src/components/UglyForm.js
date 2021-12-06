import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

function UglyForm() {
    const {data, handleChange, handleSubmit} = useContext(ThemeContext)

    return(
        <div className="form-container">
            <form>
                <input
                    name="title"
                    value={data.title}
                    placeholder="Title"
                    onChange={handleChange}
                ></input>
                <input
                    name="imgUrl"
                    value={data.imgUrl}
                    placeholder="Img URL"
                    onChange={handleChange}
                ></input>
                <input
                    name="description"
                    value={data.description}
                    placeholder="Description"
                    onChange={handleChange}
                ></input>
                <button onclick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UglyForm