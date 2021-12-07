import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

import UglyThing from "./UglyThing"

function UglyList() {
    const {list} = useContext(ThemeContext)
    console.log(list)
    const renderUglyList = list.map(thing => (
        <UglyThing
            key={thing.id}
            title={thing.title}
            imgUrl={thing.imgUrl}
            description={thing.description}
        />
    ))

    return(
        <div className="list-container">
            <ul>
                {renderUglyList}
            </ul>
        </div>
    )
}

export default UglyList