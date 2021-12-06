import React, {useContext} from "react"
import { ThemeContext } from "../themeContext"

function Footer(){
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`${theme}-footer`}>
            <h3>This project is presented to you by Timothy Matthew Mixon.</h3>
        </footer>
    )
}

export default Footer