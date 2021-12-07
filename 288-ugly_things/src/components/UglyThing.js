import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

function UglyThing() {
    const {list} = useContext(ThemeContext)
    const {title, imgUrl, description} = list
    

    return(
        <li>
            <h2>{title}</h2>
            <img
                src={`${imgUrl}`}
                style={{
                    height: "200px",
                    width: "200px"
                }}
                alt={title}
            ></img>
            <p>{description}</p>
        </li>
    )
}

export default UglyThing