import React, {useContext} from "react"
import { ThemeContext } from "../themeContext"

function Header() {
    const {theme} = useContext(ThemeContext)
    return (
        <header className={`${theme}-header`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </header>
    )
}

export default Header